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
    name: "John Smith",
    rating: 5,
    date: "March 15, 2024",
    comment: "Exceptional service and beautiful rooms. The staff went above and beyond to make our stay memorable.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e",
  },
  {
    id: 2,
    name: "Emma Wilson",
    rating: 4.5,
    date: "March 10, 2024",
    comment: "Lovely hotel with great amenities. The location is perfect for exploring the city.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
  },
  {
    id: 3,
    name: "Michael Brown",
    rating: 5,
    date: "March 5, 2024",
    comment: "Outstanding experience! The room was spotless and the view was breathtaking.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
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
          <h1 className="text-4xl font-serif mb-6">Guest Reviews</h1>
          
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

          <div className="max-w-2xl mx-auto">
            <Card>
              <CardHeader>
                <h2 className="text-2xl font-serif">Write a Review</h2>
              </CardHeader>
              <CardContent>
                <Textarea
                  placeholder="Share your experience..."
                  value={newReview}
                  onChange={(e) => setNewReview(e.target.value)}
                  className="mb-4"
                />
                <Button>Submit Review</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Reviews;