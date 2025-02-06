
interface AttractionDetailsProps {
  name: string;
  description: string;
  image: string;
}

const AttractionDetails = ({ name, description, image }: AttractionDetailsProps) => {
  const galleryImages = [
    image,
    "https://images.unsplash.com/photo-1533929736458-ca588d08c8be",
    "https://images.unsplash.com/photo-1554254648-2d58a1bc3fd5",
  ];

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 animate-fade-in">
      <h3 className="text-xl font-serif mb-4">{name}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <div className="grid grid-cols-3 gap-4">
        {galleryImages.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`${name} ${index + 1}`}
            className="w-full h-32 object-cover rounded-lg transition-transform duration-300 hover:scale-105"
          />
        ))}
      </div>
    </div>
  );
};

export default AttractionDetails;
