
import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { AirVent, Bath, Tv, Wifi } from "lucide-react";

const rooms = [
  {
    id: 1,
    name: "Habitación simple",
    description: "Habitación amplia con escritorio",
    price: "$15",
    image: "rooms/habitacion_simple.jpg",
    amenities: ["Cama de dos plazas", "WiFi", "Aire acondicionado", "Smart TV","Baño privado"],
  },
  {
    id: 2,
    name: "Habitación doble",
    description: "Habitación amplia con dos camas",
    price: "$30",
    image: "rooms/habitacion_doble.jpg",
    amenities: ["Dos camas de dos plazas", "WiFi", "Aire acondicionado", "Smart TV","Baño privado"],
  },
  {
    id: 3,
    name: "Habitación familiar",
    description: "Amplia habitación para familias o grupos de trabajo",
    price: "$60",
    image: "rooms/familiar.jpg",
    amenities: ["2 Camas y una litera", "WiFi", "Aire acondicionado", "Smart TV","Baño privado"],
  },
  {
    id: 4,
    name: "Habitación matrimonial",
    description: "Confortable, aislada y privada",
    price: "$30",
    image: "rooms/matrimonial.jpg",
    amenities: ["Cama de dos plazas", "WiFi", "Aire acondicionado", "Smart TV","Baño privado"],
  },
];

const Rooms = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-20">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-4xl font-serif mb-6">Nuestras habitaciones</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {rooms.map((room) => (
              <Card key={room.id} className="overflow-hidden animate-fade-in">
                <div className="relative h-64">
                  <img
                    src={room.image}
                    alt={room.name}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>
                <CardHeader>
                  <div className="flex justify-between items-center">
                    <CardTitle className="text-2xl font-serif">{room.name}</CardTitle>
                    <span className="text-2xl font-bold text-primary">{room.price}<span className="text-sm text-gray-500">/noche</span></span>
                  </div>
                  <CardDescription>{room.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex gap-2 mb-4">
                    <AirVent className="h-5 w-5 text-gray-500" />
                    <Wifi className="h-5 w-5 text-gray-500" />
                    <Bath className="h-5 w-5 text-gray-500" />
                    <Tv className="h-5 w-5 text-gray-500" />
                  </div>
                  <div className="space-y-2">
                    <ul className="text-sm text-gray-500 list-disc list-inside">
                      {room.amenities.map((amenity, index) => (
                        <li key={index}>{amenity}</li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
                <CardFooter>
                  <a
                    href={`https://wa.me/593993299022?text=Hola, me gustaría reservar la ${room.name}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full"
                  >
                    <Button className="w-full">Reserva ahora</Button>
                  </a>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Rooms;
