import React, { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { toast } from './ui/use-toast';

const Map = () => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [token, setToken] = useState('');
  const [isTokenSet, setIsTokenSet] = useState(false);

  const initializeMap = (accessToken: string) => {
    if (!mapContainer.current) return;

    try {
      mapboxgl.accessToken = accessToken;
      
      map.current = new mapboxgl.Map({
        container: mapContainer.current,
        style: 'mapbox://styles/mapbox/light-v11',
        center: [-74.006, 40.7128], // Default to New York City
        zoom: 12,
      });

      // Add navigation controls
      map.current.addControl(
        new mapboxgl.NavigationControl(),
        'top-right'
      );

      // Add marker for hotel location
      new mapboxgl.Marker()
        .setLngLat([-74.006, 40.7128])
        .addTo(map.current);

      setIsTokenSet(true);
      toast({
        title: "Map initialized successfully",
        description: "You can now interact with the map",
      });
    } catch (error) {
      console.error('Error initializing map:', error);
      toast({
        title: "Error initializing map",
        description: "Please check your Mapbox token and try again",
        variant: "destructive",
      });
      setIsTokenSet(false);
    }
  };

  useEffect(() => {
    return () => {
      if (map.current) {
        map.current.remove();
      }
    };
  }, []);

  if (!isTokenSet) {
    return (
      <div className="p-4 space-y-4">
        <p className="text-sm text-gray-600">
          Please enter your Mapbox public token to view the map. You can find this at{' '}
          <a 
            href="https://mapbox.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary underline"
          >
            mapbox.com
          </a>
        </p>
        <div className="flex gap-2">
          <Input
            type="text"
            placeholder="Enter Mapbox token"
            value={token}
            onChange={(e) => setToken(e.target.value)}
          />
          <Button onClick={() => initializeMap(token)}>
            Set Token
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div ref={mapContainer} className="w-full h-full" />
  );
};

export default Map;