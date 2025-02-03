import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { MapPin, Navigation, Car, Utensils, ShoppingBag, Camera } from "lucide-react";
import Map from "@/components/Map";
import AttractionCard from "@/components/location/AttractionCard";
import AttractionDetails from "@/components/location/AttractionDetails";

const Location = () => {
  const [selectedAttraction, setSelectedAttraction] = useState<string | null>(null);

  const attractions = [
    {
      id: "1",
      name: "Central Park",
      type: "Tourist Spot",
      distance: "0.5 km",
      time: "7 min walk",
      description: "A beautiful urban park perfect for morning walks and picnics.",
      image: "https://images.unsplash.com/photo-1472396961693-142e6e269027",
      icon: <MapPin className="h-5 w-5" />
    },
    {
      id: "2",
      name: "Fine Dining District",
      type: "Restaurants",
      distance: "1 km",
      time: "5 min drive",
      description: "Collection of high-end restaurants offering international cuisine.",
      image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625",
      icon: <Utensils className="h-5 w-5" />
    },
    {
      id: "3",
      name: "Shopping Mall",
      type: "Shopping",
      distance: "2 km",
      time: "8 min drive",
      description: "Modern shopping complex with luxury brands and entertainment.",
      image: "https://images.unsplash.com/photo-1433086966358-54859d0ed716",
      icon: <ShoppingBag className="h-5 w-5" />
    },
    {
      id: "4",
      name: "Nature Reserve",
      type: "Tourist Spot",
      distance: "5 km",
      time: "15 min drive",
      description: "Protected area with hiking trails and wildlife viewing.",
      image: "https://images.unsplash.com/photo-1426604966848-d7adac402bff",
      icon: <Camera className="h-5 w-5" />
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-20">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-4xl font-serif mb-6">Our Location</h1>
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h2 className="text-2xl font-serif mb-4">How to Find Us</h2>
                <div className="flex items-start gap-4 mb-4">
                  <MapPin className="h-5 w-5 mt-1 text-primary" />
                  <div>
                    <h3 className="font-medium">Address</h3>
                    <p className="text-gray-600">123 Luxury Street, City Center, 12345</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 mb-4">
                  <Navigation className="h-5 w-5 mt-1 text-primary" />
                  <div>
                    <h3 className="font-medium">From the Airport</h3>
                    <p className="text-gray-600">20 minutes by car (15 km)</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Car className="h-5 w-5 mt-1 text-primary" />
                  <div>
                    <h3 className="font-medium">Parking</h3>
                    <p className="text-gray-600">Complimentary valet parking available</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6">
                <h2 className="text-2xl font-serif mb-4">Nearby Attractions</h2>
                <div className="space-y-4">
                  {attractions.map((attraction) => (
                    <AttractionCard
                      key={attraction.id}
                      {...attraction}
                      isSelected={selectedAttraction === attraction.id}
                      onSelect={setSelectedAttraction}
                    />
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="h-[400px] rounded-lg overflow-hidden shadow-lg">
                <Map />
              </div>

              {selectedAttraction && (
                <AttractionDetails
                  {...attractions.find(a => a.id === selectedAttraction)!}
                />
              )}
            </div>
          </div>
        </div>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Location;