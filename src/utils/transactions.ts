import { Transaction, TransactionStatus } from "../types";

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

export const getCurrencyGradient = (currency: Transaction["currency"]) => ({
  from: currency === "GCS" ? "blue.4" : "orange.4",
  to: currency === "GCS" ? "blue.6" : "orange.6",
});
