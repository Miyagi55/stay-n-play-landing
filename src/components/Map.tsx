
import { useEffect, useState } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { toast } from './ui/use-toast';
import { supabase } from '@/integrations/supabase/client';

const Map = () => {
  const [apiKey, setApiKey] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchApiKey = async () => {
      try {
        const { data, error } = await supabase
          .from('apis_keys')
          .select('api_key')
          .eq('proveedor', 'google_maps')
          .single();

        if (error) throw error;
        
        if (data?.api_key) {
          setApiKey(data.api_key);
        }
      } catch (err) {
        console.error('Error fetching API key:', err);
        setError('Failed to load Google Maps API key');
        toast({
          title: "Error",
          description: "Failed to load Google Maps. Please try again later.",
          variant: "destructive",
        });
      } finally {
        setIsLoading(false);
      }
    };

    fetchApiKey();
  }, []);

  const mapStyles = {
    height: '100%',
    width: '100%',
  };

  const defaultCenter = {
    lat: -2.221631582266207,
    lng: -80.91008549147948,
  };

  if (isLoading) {
    return (
      <div className="p-4">
        <p className="text-sm text-gray-600">Loading map...</p>
      </div>
    );
  }

  if (error || !apiKey) {
    return (
      <div className="p-4 space-y-4">
        <p className="text-sm text-gray-600">
          Please make sure you have added your Google Maps API key to Supabase with provider name "google_maps"
        </p>
        <Button 
          onClick={() => window.location.reload()}
          variant="outline"
        >
          Retry
        </Button>
      </div>
    );
  }

  return (
    <LoadScript googleMapsApiKey={apiKey}>
      <GoogleMap
        mapContainerStyle={mapStyles}
        zoom={15}
        center={defaultCenter}
      >
        <Marker 
          position={defaultCenter}
          title="Hotel Arena Inn"
        />
      </GoogleMap>
    </LoadScript>
  );
};

export default Map;
