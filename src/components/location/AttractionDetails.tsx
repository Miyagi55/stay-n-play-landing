interface AttractionDetailsProps {
  name: string;
  description: string;
  image: string;
}

const AttractionDetails = ({ name, description, image }: AttractionDetailsProps) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 animate-fade-in">
      <h3 className="text-xl font-serif mb-4">{name}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <img
        src={image}
        alt={name}
        className="w-full h-48 object-cover rounded-lg"
      />
    </div>
  );
};

export default AttractionDetails;