import { useCallback } from "react";
import { useExchangeRate } from "./api";
import Decimal from "decimal.js";
import { CurrencyOpts } from "../types";

export const useConvertCurrency = () => {
  const { data: exchangeRate } = useExchangeRate();

  const convert = useCallback(
    (
      amount: number,
      fromCurrency: CurrencyOpts,
      toCurrency: CurrencyOpts
    ): string => {
      if (!exchangeRate || fromCurrency === toCurrency)
        return amount.toString();

      const rate = new Decimal(exchangeRate.rate);
      const amountDecimal = new Decimal(amount);

      if (
        fromCurrency === CurrencyOpts.ICS &&
        toCurrency === CurrencyOpts.GCS
      ) {
        return amountDecimal.mul(rate).toFixed(2);
      } else if (
        fromCurrency === CurrencyOpts.GCS &&
        toCurrency === CurrencyOpts.ICS
      ) {
        return amountDecimal.div(rate).toFixed(2);
      }

      return amount.toString();
    },
    [exchangeRate]
  );

  return { convert };
};
