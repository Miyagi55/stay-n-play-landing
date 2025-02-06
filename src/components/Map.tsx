
import { useEffect, useState } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { toast } from './ui/use-toast';

const Map = () => {
  const [apiKey, setApiKey] = useState('');
  const [isKeySet, setIsKeySet] = useState(false);

  const mapStyles = {
    height: '100%',
    width: '100%',
  };

  const defaultCenter = {
    lat: 40.7128,
    lng: -74.006,
  };

  if (!isKeySet) {
    return (
      <div className="p-4 space-y-4">
        <p className="text-sm text-gray-600">
          Please enter your Google Maps API key to view the map. You can get one at{' '}
          <a 
            href="https://console.cloud.google.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary underline"
          >
            Google Cloud Console
          </a>
        </p>
        <div className="flex gap-2">
          <Input
            type="text"
            placeholder="Enter Google Maps API key"
            value={apiKey}
            onChange={(e) => setApiKey(e.target.value)}
          />
          <Button onClick={() => setIsKeySet(true)}>
            Set Key
          </Button>
        </div>
      </div>
    );
  }

  return (
    <LoadScript googleMapsApiKey={apiKey}>
      <GoogleMap
        mapContainerStyle={mapStyles}
        zoom={13}
        center={defaultCenter}
      >
        <Marker position={defaultCenter} />
      </GoogleMap>
    </LoadScript>
  );
};

export default Map;
