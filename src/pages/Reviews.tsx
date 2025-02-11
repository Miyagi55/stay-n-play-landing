import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star, StarHalf } from "lucide-react";
import { Textarea } from "@/components/ui/textarea";

const reviews = [
  {
    id: 1,
    name: "Elvis Mendez",
    rating: 5,
    date: "Hace un año",
    comment: "Hotel ubicado en calle principal del centro de la libertad, muy bonito, a una cuadra de la playa de La Libertad, consta con almacenes cerca y un gran tía frente al hotel, centro de la libertad y de toda la actividad comercial.",
    image: "reviews/review_elvis.png",
  },
  {
    id: 2,
    name: "Stephanie Espinoza Delgado",
    rating: 4.5,
    date: "Hace 6 meses",
    comment: "Un lugar muy cómodo para pasarla muy bien en vacaciones con amigos o familia.",
    image: "reviews/silvia_review.png",
  },
  {
    id: 3,
    name: "Francisco Ayon",
    rating: 4,
    date: "Hace 3 meses",
    comment: "Lugar bonito y barato muy acogedor y buena atención",
    image: "reviews/review3.png",
  },
];

const Reviews = () => {
  const [newReview, setNewReview] = useState("");

  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(<Star key={`star-${i}`} className="w-5 h-5 fill-yellow-400 text-yellow-400" />);
    }

    if (hasHalfStar) {
      stars.push(<StarHalf key="half-star" className="w-5 h-5 fill-yellow-400 text-yellow-400" />);
    }

    return stars;
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-20">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-4xl font-serif mb-6">Testimonios de nuestros huéspedes</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {reviews.map((review) => (
              <Card key={review.id} className="overflow-hidden">
                <CardHeader className="flex flex-row items-center gap-4">
                  <img
                    src={review.image}
                    alt={review.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="font-medium">{review.name}</h3>
                    <p className="text-sm text-gray-500">{review.date}</p>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex mb-2">{renderStars(review.rating)}</div>
                  <p className="text-gray-600">{review.comment}</p>
                </CardContent>
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

export default Reviews;