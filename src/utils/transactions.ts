import Decimal from "decimal.js";
import {
  CurrencyOpts,
  FinancialSummary,
  Transaction,
  TransactionStatus,
} from "../types";

/**
 * Returns emoji icon for transaction status
 * @param status - Transaction status
 * @returns Status emoji string
 */
export const getStatusIcon = (status: Transaction["status"]): string => {
  switch (status) {
    case TransactionStatus.Completed:
      return "✅";
    case TransactionStatus.Blocked:
      return "🚫";
    case TransactionStatus.InProgress:
      return "⏳";
    default:
      return "⏳";
  }
};

/**
 * Returns color for transaction status styling
 * @param status - Transaction status
 * @returns Color string
 */
export const getStatusColor = (status: Transaction["status"]): string => {
  switch (status) {
    case TransactionStatus.Completed:
      return "green";
    case TransactionStatus.Blocked:
      return "red";
    case TransactionStatus.InProgress:
      return "yellow";
    default:
      return "gray";
  }
};

/**
 * Returns gradient colors for status badges
 * @param status - Transaction status
 * @returns Gradient object with from/to colors
 */
export const getStatusGradient = (status: Transaction["status"]) => ({
  from:
    status === TransactionStatus.Completed
      ? "green.4"
      : status === TransactionStatus.Blocked
      ? "red.4"
      : "yellow.4",
  to:
    status === TransactionStatus.Completed
      ? "green.6"
      : status === TransactionStatus.Blocked
      ? "red.6"
      : "yellow.6",
});

/**
 * Returns gradient colors for currency badges
 * @param currency - Transaction currency
 * @returns Gradient object with from/to colors
 */
export const getCurrencyGradient = (currency: Transaction["currency"]) => ({
  from: currency === "GCS" ? "blue.4" : "orange.4",
  to: currency === "GCS" ? "blue.6" : "orange.6",
});

/**
 * Creates initial financial summary with zero values
 * @returns Empty FinancialSummary object
 */
export const createEmptyFinancialSummary = (): FinancialSummary => ({
  gcsTotal: new Decimal(0),
  icsTotal: new Decimal(0),
  gcsTransactions: 0,
  icsTransactions: 0,
  inProgressCount: 0,
});

/**
 * Calculates financial metrics from a list of transactions
 * @param transactions - Array of transactions to analyze
 * @returns FinancialSummary with totals and counts
 */
export const calculateFinancialMetrics = (
  transactions: Transaction[]
): FinancialSummary => {
  const metrics = {
    gcsSum: new Decimal(0),
    icsSum: new Decimal(0),
    gcsCount: 0,
    icsCount: 0,
    inProgressCount: 0,
  };

  transactions.forEach((transaction) => {
    // Update currency totals and counts
    if (transaction.currency === CurrencyOpts.GCS) {
      metrics.gcsSum = metrics.gcsSum.plus(transaction.amount);
      metrics.gcsCount++;
    } else if (transaction.currency === CurrencyOpts.ICS) {
      metrics.icsSum = metrics.icsSum.plus(transaction.amount);
      metrics.icsCount++;
    }

    // Count in-progress transactions
    if (transaction.status === TransactionStatus.InProgress) {
      metrics.inProgressCount++;
    }
  });

  return {
    gcsTotal: metrics.gcsSum,
    icsTotal: metrics.icsSum,
    gcsTransactions: metrics.gcsCount,
    icsTransactions: metrics.icsCount,
    inProgressCount: metrics.inProgressCount,
  };
};
