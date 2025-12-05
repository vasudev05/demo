import { useState } from "react";
import { allTiles, defaultTileIds } from "@/data/tiles";
import { TileData } from "@/types/tile";
import ServiceTile from "./ServiceTile";
import TileSelector from "./TileSelector";
import { useToast } from "@/hooks/use-toast";

const Dashboard = () => {
  const [activeTileIds, setActiveTileIds] = useState<string[]>(defaultTileIds);
  const { toast } = useToast();

  // Get active tiles data
  const activeTiles: TileData[] = activeTileIds
    .map((id) => allTiles.find((tile) => tile.id === id))
    .filter((tile): tile is TileData => tile !== undefined);

  // Get available tiles (not currently on dashboard)
  const availableTiles = allTiles.filter(
    (tile) => !activeTileIds.includes(tile.id)
  );

  const handleDeleteTile = (tileId: string) => {
    const tile = allTiles.find((t) => t.id === tileId);
    setActiveTileIds((prev) => prev.filter((id) => id !== tileId));
    toast({
      title: "Tile removed",
      description: `${tile?.title} has been removed from your dashboard.`,
    });
  };

  const handleAddTile = (tileId: string) => {
    const tile = allTiles.find((t) => t.id === tileId);
    setActiveTileIds((prev) => [...prev, tileId]);
    toast({
      title: "Tile added",
      description: `${tile?.title} has been added to your dashboard.`,
    });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card">
        <div className="container mx-auto px-6 py-4">
          <h1 className="text-xl font-semibold text-foreground">
            Services Dashboard
          </h1>
          <p className="text-sm text-muted-foreground mt-1">
            Manage your services and resources
          </p>
        </div>
      </header>

      {/* Main content */}
      <main className="container mx-auto px-6 py-8">
        {/* Toolbar */}
        <div className="flex items-center justify-between mb-8">
          <div className="text-sm text-muted-foreground">
            Showing {activeTiles.length} of {allTiles.length} tiles
          </div>
          <TileSelector
            availableTiles={availableTiles}
            onSelect={handleAddTile}
          />
        </div>

        {/* Tiles Grid */}
        {activeTiles.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {activeTiles.map((tile) => (
              <ServiceTile
                key={tile.id}
                tile={tile}
                onDelete={handleDeleteTile}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <p className="text-muted-foreground mb-4">
              No tiles on your dashboard
            </p>
            <p className="text-sm text-muted-foreground">
              Use the dropdown above to add tiles
            </p>
          </div>
        )}
      </main>
    </div>
  );
};

export default Dashboard;
