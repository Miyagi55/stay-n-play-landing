
import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { MapPin, Navigation, Car, Utensils, ShoppingBag, Camera, Sun, Landmark } from "lucide-react";
import Map from "@/components/Map";
import AttractionCard from "@/components/location/AttractionCard";
import AttractionDetails from "@/components/location/AttractionDetails";

const Location = () => {
  const [selectedAttraction, setSelectedAttraction] = useState<string | null>(null);

  const attractions = [
    {
      id: "1",
      name: "Malecón y playa de La Libertad",
      type: "Tourist Spot",
      distance: "100 metros",
      time: "3 min caminando",
      description: "Un malecón renovado con variedad de sitios gastrónomicos y una amplia playa segura y tranquila.",
      images: [
        "images_for_attractions/beach/playa_dia.jpg",
        "images_for_attractions/beach/malecon.jpg",
        "images_for_attractions/beach/playa_noche.jpg"
      ],
      image: "images_for_attractions/beach/playa_dia.jpg",
      icon: <Sun className="h-5 w-5" />
    },
    {
      id: "2",
      name: "Centro Comercial Paseo Shopping",
      type: "Shopping",
      distance: "2 km",
      time: "5 min drive",
      description: "Centro comercial con variedad de restaurantes y tiendas, cuenta con un Supercines.",
      images: [
        "images_for_attractions/shopping/paseo.jpg",
        "images_for_attractions/shopping/supercines.jpeg",
        "images_for_attractions/shopping/supercines2.jpeg"
      ],
      image: "images_for_attractions/shopping/paseo.jpg",
      icon: <ShoppingBag className="h-5 w-5" />
    },
    {
      id: "3",
      name: "Museo de La Libertad",
      type: "Museum",
      distance: "100 metros",
      time: "3 minutos caminando",
      description: "Museo que cuenta la historia del Cantón La Libertad.",
      images: [
        "images_for_attractions/museum/museo_playa.jpg",
        "images_for_attractions/museum/museo.jpg",
        "images_for_attractions/museum/museo1.jpg"
      ],
      image: "images_for_attractions/museum/museo_playa.jpg",
      icon: <Landmark className="h-5 w-5" />
    },
    {
      id: "4",
      name: "Mirador de la lobería, Salinas",
      type: "Tourist Spot",
      distance: "12 km",
      time: "30 minutos en auto",
      description: "Hermoso mirador con vista panorámica de la Península.",
      images: [
        "images_for_attractions/mirador/Puntilla1.jpg",
        "images_for_attractions/mirador/chocolatera.jpg",
        "images_for_attractions/mirador/puntilla2.jpeg"
      ],
      image: "images_for_attractions/mirador/Puntilla1.jpg",
      icon: <Camera className="h-5 w-5" />
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-20">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-4xl font-serif mb-6">Nuestra Ubicación</h1>
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h2 className="text-2xl font-serif mb-4">Cómo encontrarnos</h2>
                <div className="flex items-start gap-4 mb-4">
                  <MapPin className="h-5 w-5 mt-1 text-primary" />
                  <div>
                    <h3 className="font-medium">Dirección</h3>
                    <p className="text-gray-600">Santa Elena, La Libertad, Av. 9 de Octubre 533 y calle Guayaquil</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 mb-4">
                  <Navigation className="h-5 w-5 mt-1 text-primary" />
                  <div>
                    <h3 className="font-medium">Desde el Terminal Terrestre de Santa Elena</h3>
                    <p className="text-gray-600">20 minutos en auto (15 km)</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Car className="h-5 w-5 mt-1 text-primary" />
                  <div>
                    <h3 className="font-medium">Parqueo</h3>
                    <p className="text-gray-600">Parqueo gratuito</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6">
                <h2 className="text-2xl font-serif mb-4">Lugares cerca para visitar</h2>
                <div className="space-y-4">
                  {attractions.map((attraction) => (
                    <div key={attraction.id} className="space-y-4">
                      <AttractionCard
                        {...attraction}
                        isSelected={selectedAttraction === attraction.id}
                        onSelect={setSelectedAttraction}
                      />
                      {selectedAttraction === attraction.id && (
                        <AttractionDetails {...attraction} images={attraction.images} />
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="h-[400px] rounded-lg overflow-hidden shadow-lg">
              <Map />
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
