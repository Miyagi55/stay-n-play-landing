
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
    name: "Deluxe Suite",
    description: "Spacious suite with city view",
    price: "$299",
    image: "https://images.unsplash.com/photo-1590490360182-c33d57733427",
    amenities: ["King Size Bed", "Free WiFi", "Mini Bar", "Smart TV"],
    size: "45m²",
  },
  {
    id: 2,
    name: "Executive Room",
    description: "Modern room with workspace",
    price: "$199",
    image: "https://images.unsplash.com/photo-1591088398332-8a7791972843",
    amenities: ["Queen Size Bed", "Free WiFi", "Work Desk", "Coffee Maker"],
    size: "35m²",
  },
  {
    id: 3,
    name: "Family Suite",
    description: "Perfect for families",
    price: "$399",
    image: "https://images.unsplash.com/photo-1566665797739-1674de7a421a",
    amenities: ["2 Queen Beds", "Free WiFi", "Kitchen", "2 Bathrooms"],
    size: "65m²",
  },
  {
    id: 4,
    name: "Standard Room",
    description: "Comfortable and cozy",
    price: "$149",
    image: "https://images.unsplash.com/photo-1505693314120-0d443867891c",
    amenities: ["Queen Size Bed", "Free WiFi", "TV", "Shower"],
    size: "25m²",
  },
];

const Rooms = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-20">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-4xl font-serif mb-6">Our Rooms</h1>
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
                    <span className="text-2xl font-bold text-primary">{room.price}<span className="text-sm text-gray-500">/night</span></span>
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
                    <p className="text-sm text-gray-500">Room Size: {room.size}</p>
                    <ul className="text-sm text-gray-500 list-disc list-inside">
                      {room.amenities.map((amenity, index) => (
                        <li key={index}>{amenity}</li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">Book Now</Button>
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
