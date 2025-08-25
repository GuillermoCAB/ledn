import { CurrencyOpts } from "../types";

export const CURRENCY_CONFIG = {
  [CurrencyOpts.GCS]: {
    name: "Galactic Credit Standard",
    symbol: "GCS",
    color: "blue",
    convertedSymbol: "ICS",
  },
  [CurrencyOpts.ICS]: {
    name: "Imperial Crown Standard",
    symbol: "ICS",
    color: "orange",
    convertedSymbol: "GCS",
  },
};
