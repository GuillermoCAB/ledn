import { CurrencyOpts } from "../types";

export const CURRENCY_CONFIG = {
  [CurrencyOpts.GCS]: {
    name: "Galactic Credit Standard",
    symbol: "GCS",
    color: "coruscant",
    convertedSymbol: "ICS",
  },
  [CurrencyOpts.ICS]: {
    name: "Imperial Crown Standard",
    symbol: "ICS",
    color: "coruscant",
    convertedSymbol: "GCS",
  },
};

export const CurrencyOptions = [
  {
    value: "all" as const,
    label: "All Currencies",
    ariaLabel: "Show all currencies",
  },
  {
    value: CurrencyOpts.GCS as const,
    label: "GCS (Galactic Credit)",
    ariaLabel: "Show Galactic Credit Standard transactions",
  },
  {
    value: CurrencyOpts.ICS as const,
    label: "ICS (Imperial Crown)",
    ariaLabel: "Show Imperial Crown Standard transactions",
  },
];
