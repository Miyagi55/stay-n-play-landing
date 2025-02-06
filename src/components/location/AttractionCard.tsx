
import { LucideIcon, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface AttractionProps {
  id: string;
  name: string;
  type: string;
  distance: string;
  time: string;
  description: string;
  image: string;
  icon: React.ReactNode;
  isSelected: boolean;
  onSelect: (id: string) => void;
}

const AttractionCard = ({
  id,
  name,
  type,
  distance,
  time,
  description,
  image,
  icon,
  isSelected,
  onSelect,
}: AttractionProps) => {
  return (
    <Button
      key={id}
      variant={isSelected ? "secondary" : "outline"}
      className="w-full justify-start gap-4 relative"
      onClick={() => onSelect(isSelected ? "" : id)}
    >
      <ChevronRight 
        className={cn(
          "h-4 w-4 transition-transform duration-200",
          isSelected && "rotate-90"
        )}
      />
      {icon}
      <div className="text-left">
        <div className="font-medium">{name}</div>
        <div className="text-sm text-gray-600">
          {distance} • {time}
        </div>
      </div>
    </Button>
  );
};

export default AttractionCard;
