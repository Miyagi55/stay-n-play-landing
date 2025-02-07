
import React, { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { supabase } from '@/integrations/supabase/client';
import { toast } from './ui/use-toast';
import { Button } from './ui/button';
import { Input } from './ui/input';

// Define attraction coordinates
const ATTRACTIONS = [
  {
    name: "Central Park",
    coordinates: [-80.9107140122775, -2.2209777580793153]
  },
  {
    name: "Fine Dining District",
    coordinates: [-80.92123606630528, -2.22608854967027]
  },
  {
    name: "Shopping Mall",
    coordinates: [-80.9113989443953, -2.2208065042731873]
  },
  {
    name: "Nature Reserve",
    coordinates: [-80.96848618695444, -2.2056003862532614]
  }
];

const HOTEL_COORDINATES = [-80.91008549147948, -2.221631582266207];

const Map = () => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [apiKey, setApiKey] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [tempApiKey, setTempApiKey] = useState('');
  const [activeRoute, setActiveRoute] = useState<any>(null);

  useEffect(() => {
    const fetchApiKey = async () => {
      try {
        const { data, error } = await supabase
          .from('apis_keys')
          .select('api_key')
          .eq('proveedor', 'map_box')
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

  const createRoute = async (destinationCoords: [number, number]) => {
    if (!map.current || !apiKey) return;

    try {
      const query = await fetch(
        `https://api.mapbox.com/directions/v5/mapbox/walking/${HOTEL_COORDINATES[0]},${HOTEL_COORDINATES[1]};${destinationCoords[0]},${destinationCoords[1]}?steps=true&geometries=geojson&access_token=${apiKey || tempApiKey}`
      );
      const json = await query.json();
      
      // Remove existing route
      if (activeRoute) {
        const prevRoute = map.current.getSource('route');
        if (prevRoute) {
          map.current.removeLayer('route');
          map.current.removeSource('route');
        }
      }

      // Add new route
      const route = json.routes[0].geometry.coordinates;
      const geojson = {
        type: 'Feature',
        properties: {},
        geometry: {
          type: 'LineString',
          coordinates: route
        }
      };

      map.current.addLayer({
        id: 'route',
        type: 'line',
        source: {
          type: 'geojson',
          data: geojson
        },
        layout: {
          'line-join': 'round',
          'line-cap': 'round'
        },
        paint: {
          'line-color': '#3887be',
          'line-width': 5,
          'line-opacity': 0.75
        }
      });

      setActiveRoute(route);
      
      // Fit bounds to show entire route
      const bounds = new mapboxgl.LngLatBounds();
      route.forEach((coord: [number, number]) => bounds.extend(coord));
      map.current.fitBounds(bounds, { padding: 50 });

      toast({
        title: "Route created",
        description: "Click another attraction to change the route",
      });
    } catch (err) {
      console.error('Error creating route:', err);
      toast({
        title: "Error",
        description: "Failed to create route. Please try again.",
        variant: "destructive",
      });
    }
  };

  useEffect(() => {
    if (!mapContainer.current || (!apiKey && !tempApiKey)) return;
    
    const token = apiKey || tempApiKey;
    mapboxgl.accessToken = token;

    try {
      map.current = new mapboxgl.Map({
        container: mapContainer.current,
        style: 'mapbox://styles/mapbox/dark-v11', // Changed to dark style
        center: HOTEL_COORDINATES,
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

      // Add Hotel marker
      new mapboxgl.Marker({ color: '#F97316' })
        .setLngLat(HOTEL_COORDINATES)
        .setPopup(new mapboxgl.Popup().setHTML("<h3>Hotel Arena Inn</h3>"))
        .addTo(map.current);

      // Add attraction markers
      ATTRACTIONS.forEach((attraction) => {
        const marker = new mapboxgl.Marker({ color: '#D946EF' })
          .setLngLat(attraction.coordinates)
          .setPopup(new mapboxgl.Popup().setHTML(`<h3>${attraction.name}</h3>`))
          .addTo(map.current);

        // Add click listener to create route
        marker.getElement().addEventListener('click', () => {
          createRoute(attraction.coordinates);
        });
      });

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
