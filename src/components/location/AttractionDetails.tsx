
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

interface AttractionDetailsProps {
  name: string;
  description: string;
  image: string;
  images?: string[];
}

const AttractionDetails = ({ name, description, images = [] }: AttractionDetailsProps) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 animate-fade-in">
      <h3 className="text-xl font-serif mb-4">{name}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <Carousel className="w-full">
        <CarouselContent>
          {images.map((img, index) => (
            <CarouselItem key={index} className="basis-full md:basis-1/2 lg:basis-1/3">
              <div className="p-1">
                <img
                  src={img}
                  alt={`${name} ${index + 1}`}
                  className="w-full h-32 object-cover rounded-lg transition-transform duration-300 hover:scale-105"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default AttractionDetails;
