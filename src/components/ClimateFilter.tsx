import React, { useCallback } from "react";
import { Button, Group } from "@mantine/core";
import { ClimateFilterOpts } from "../types";
import { ClimateOptions } from "../constants";
import { gradients } from "./commonStyles";

interface ClimateFilterProps {
  selectedClimate: ClimateFilterOpts | "all";
  onClimateChange: (climate: ClimateFilterOpts | "all") => void;
}

export const ClimateFilter: React.FC<ClimateFilterProps> = React.memo(
  ({ selectedClimate, onClimateChange }) => {
    const handleClick = useCallback(
      (climate: ClimateFilterOpts | "all") => () => onClimateChange(climate),
      [onClimateChange]
    );

    return (
      <Group gap="xs">
        {ClimateOptions.map(({ value, label, ariaLabel }) => (
          <Button
            key={value}
            size="sm"
            variant={selectedClimate === value ? "gradient" : "outline"}
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
