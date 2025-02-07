
import React, { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { supabase } from '@/integrations/supabase/client';
import { toast } from './ui/use-toast';
import { Button } from './ui/button';
import { Input } from './ui/input';

const Map = () => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [apiKey, setApiKey] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [tempApiKey, setTempApiKey] = useState('');

  useEffect(() => {
    const fetchApiKey = async () => {
      try {
        const { data, error } = await supabase
          .from('apis_keys')
          .select('api_key')
          .eq('proveedor', 'mapbox')
          .single();

        if (error) throw error;
        
        if (data?.api_key) {
          setApiKey(data.api_key);
        }
      } catch (err) {
        console.error('Error fetching API key:', err);
        setError('Failed to load Mapbox API key');
      } finally {
        setIsLoading(false);
      }
    };

    fetchApiKey();
  }, []);

  useEffect(() => {
    if (!mapContainer.current || (!apiKey && !tempApiKey)) return;
    
    const token = apiKey || tempApiKey;
    mapboxgl.accessToken = token;

    try {
      map.current = new mapboxgl.Map({
        container: mapContainer.current,
        style: 'mapbox://styles/mapbox/light-v11',
        center: [-80.91008549147948, -2.221631582266207], // Note: Mapbox uses [lng, lat] order
        zoom: 15,
        pitch: 45,
      });

      // Add navigation controls
      map.current.addControl(
        new mapboxgl.NavigationControl({
          visualizePitch: true,
        }),
        'top-right'
      );

      // Add marker for Hotel Arena Inn
      new mapboxgl.Marker()
        .setLngLat([-80.91008549147948, -2.221631582266207])
        .setPopup(new mapboxgl.Popup().setHTML("<h3>Hotel Arena Inn</h3>"))
        .addTo(map.current);

      // Cleanup
      return () => {
        map.current?.remove();
      };
    } catch (err) {
      console.error('Error initializing map:', err);
      setError('Failed to initialize map');
      toast({
        title: "Error",
        description: "Failed to initialize map. Please check your API key.",
        variant: "destructive",
      });
    }
  }, [apiKey, tempApiKey]);

  if (isLoading) {
    return (
      <div className="p-4">
        <p className="text-sm text-gray-600">Loading map...</p>
      </div>
    );
  }

  if (error || (!apiKey && !tempApiKey)) {
    return (
      <div className="p-4 space-y-4">
        <p className="text-sm text-gray-600">
          Please provide your Mapbox public token to view the map:
        </p>
        <div className="flex gap-2">
          <Input
            type="text"
            value={tempApiKey}
            onChange={(e) => setTempApiKey(e.target.value)}
            placeholder="Enter your Mapbox public token"
            className="flex-1"
          />
          <Button 
            onClick={() => window.location.reload()}
            variant="outline"
          >
            Retry
          </Button>
        </div>
        <p className="text-xs text-gray-500">
          You can find your public token in the Tokens section of your Mapbox dashboard at mapbox.com
        </p>
      </div>
    );
  }

  return (
    <div ref={mapContainer} className="w-full h-full rounded-lg" />
  );
};

export default Map;
