import React, { useCallback } from "react";
import { Button, Group } from "@mantine/core";
import { CurrencyOpts } from "../../types";
import { CurrencyOptions } from "../../constants";
import { gradients } from "../commonStyles";

interface CurrencyFilterProps {
  selectedCurrency: CurrencyOpts | "all";
  onCurrencyChange: (currency: CurrencyOpts | "all") => void;
}

const CurrencyFilter: React.FC<CurrencyFilterProps> = React.memo(
  ({ selectedCurrency, onCurrencyChange }) => {
    const handleClick = useCallback(
      (currency: CurrencyOpts | "all") => () => onCurrencyChange(currency),
      [onCurrencyChange]
    );

    return (
      <Group gap="xs">
        {CurrencyOptions.map(({ value, label, ariaLabel }) => (
          <Button
            key={value}
            size="sm"
            variant={selectedCurrency === value ? "gradient" : "outline"}
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

export default CurrencyFilter;
