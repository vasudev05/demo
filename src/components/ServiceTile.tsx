import { TileData } from "@/types/tile";
import { X, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ServiceTileProps {
  tile: TileData;
  onDelete: (id: string) => void;
}

const ServiceTile = ({ tile, onDelete }: ServiceTileProps) => {
  const Icon = tile.icon;

  return (
    <div className="group relative bg-card rounded-lg p-6 tile-shadow hover:tile-shadow-hover transition-all duration-200 animate-fade-in">
      {/* Delete button */}
      <Button
        variant="ghost"
        size="icon"
        className="absolute top-2 right-2 h-7 w-7 opacity-0 group-hover:opacity-100 transition-opacity text-muted-foreground hover:text-destructive hover:bg-destructive/10"
        onClick={() => onDelete(tile.id)}
        aria-label={`Delete ${tile.title}`}
      >
        <X className="h-4 w-4" />
      </Button>

      {/* Icon */}
      <div className="mb-4">
        <Icon className="h-10 w-10 text-icon stroke-[1.5]" />
      </div>

      {/* Title */}
      <h3 className="text-base font-semibold text-foreground mb-2">
        {tile.title}
      </h3>

      {/* Description */}
      <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
        {tile.description}
      </p>

      {/* Link */}
      <a
        href="#"
        className="inline-flex items-center text-sm font-medium text-link hover:underline"
        onClick={(e) => e.preventDefault()}
      >
        {tile.linkText}
        <ChevronRight className="h-4 w-4 ml-1" />
      </a>
    </div>
  );
};

export default ServiceTile;
