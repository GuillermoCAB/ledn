import React, { useCallback } from "react";
import { Button, Group } from "@mantine/core";
import { TerrainFilterOpts } from "../types";
import { TerrainOptions } from "../constants";
import { gradients } from "./commonStyles";

interface TerrainFilterProps {
  selectedTerrain: TerrainFilterOpts | "all";
  onTerrainChange: (terrain: TerrainFilterOpts | "all") => void;
}

export const TerrainFilter: React.FC<TerrainFilterProps> = React.memo(
  ({ selectedTerrain, onTerrainChange }) => {
    const handleClick = useCallback(
      (terrain: TerrainFilterOpts | "all") => () => onTerrainChange(terrain),
      [onTerrainChange]
    );

    return (
      <Group gap="xs">
        {TerrainOptions.map(({ value, label, ariaLabel }) => (
          <Button
            key={value}
            size="sm"
            variant={selectedTerrain === value ? "gradient" : "outline"}
            gradient={gradients.coruscant}
            color="coruscant"
            onClick={handleClick(value)}
            aria-label={ariaLabel}
          >
            {label}
          </Button>
        ))}
      </Group>
    );
  }
);
