import { useMemo } from "react";
import { Transaction, FinancialSummary } from "../types";
import {
  calculateFinancialMetrics,
  createEmptyFinancialSummary,
} from "../utils";

interface UseFinancialSummaryParams {
  transactions?: Transaction[];
}

/**
 * Custom hook that calculates financial summary from transactions
 * @param transactions - Array of transactions to analyze
 * @returns Financial summary with totals and counts by currency
 */
export const useFinancialSummary = ({
  transactions,
}: UseFinancialSummaryParams): FinancialSummary => {
  return useMemo(() => {
    if (!transactions?.length) {
      return createEmptyFinancialSummary();
    }

    return calculateFinancialMetrics(transactions);
  }, [transactions]);
};
