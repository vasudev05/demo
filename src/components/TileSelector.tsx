import { TileData } from "@/types/tile";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface TileSelectorProps {
  availableTiles: TileData[];
  onSelect: (tileId: string) => void;
}

const TileSelector = ({ availableTiles, onSelect }: TileSelectorProps) => {
  if (availableTiles.length === 0) {
    return null;
  }

  return (
    <div className="flex items-center gap-3">
      <span className="text-sm text-muted-foreground">Add tile:</span>
      <Select onValueChange={onSelect}>
        <SelectTrigger className="w-[220px] bg-card">
          <SelectValue placeholder="Select a tile to add" />
        </SelectTrigger>
        <SelectContent className="bg-card border-border">
          {availableTiles.map((tile) => {
            const Icon = tile.icon;
            return (
              <SelectItem key={tile.id} value={tile.id}>
                <div className="flex items-center gap-2">
                  <Icon className="h-4 w-4 text-icon" />
                  <span>{tile.title}</span>
                </div>
              </SelectItem>
            );
          })}
        </SelectContent>
      </Select>
    </div>
  );
};

export default TileSelector;
