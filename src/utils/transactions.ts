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
  from: currency === CurrencyOpts.GCS ? "blue.4" : "orange.4",
  to: currency === CurrencyOpts.GCS ? "blue.6" : "orange.6",
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

/**
 * Converts GCS amount to ICS using the exchange rate
 * @param gcsAmount - Amount in GCS currency
 * @param exchangeRate - Current exchange rate as string
 * @returns Converted amount in ICS
 */
export const convertGcsToIcs = (
  gcsAmount: Decimal,
  exchangeRate?: string
): Decimal => {
  const rate = parseFloat(exchangeRate || "0");
  return gcsAmount.div(rate);
};

/**
 * Converts ICS amount to GCS using the exchange rate
 * @param icsAmount - Amount in ICS currency
 * @param exchangeRate - Current exchange rate as string
 * @returns Converted amount in GCS
 */
export const convertIcsToGcs = (
  icsAmount: Decimal,
  exchangeRate?: string
): Decimal => {
  const rate = parseFloat(exchangeRate || "0");
  return icsAmount.mul(rate);
};

/**
 * Formats exchange rate text for display
 * @param exchangeRate - Exchange rate as string
 * @returns Formatted exchange rate text
 */
export const formatExchangeRateText = (exchangeRate: string): string => {
  return `1 ICS = ${exchangeRate} GCS`;
};
/**
 * Filters transactions to get only those that are in progress
 * @param transactions - Array of transactions to filter
 * @returns Array of transactions with InProgress status
 */
export const getInProgressTransactions = (
  transactions: Transaction[]
): Transaction[] => {
  return transactions.filter(
    (transaction) => transaction.status === TransactionStatus.InProgress
  );
};

/**
 * Maps transactions to blocked status for batch update
 * @param transactions - Array of transactions to update
 * @returns Array of transactions with Blocked status
 */
export const mapTransactionsToBlocked = (
  transactions: Transaction[]
): Transaction[] => {
  return transactions.map((transaction) => ({
    ...transaction,
    status: TransactionStatus.Blocked,
  }));
};

/**
 * Gets transactions that need to be blocked (currently in progress)
 * @param transactions - Array of all transactions
 * @returns Array of transactions ready to be blocked
 */
export const getTransactionsToBlock = (
  transactions: Transaction[]
): Transaction[] => {
  const inProgressTransactions = getInProgressTransactions(transactions);
  return mapTransactionsToBlocked(inProgressTransactions);
};
