import { useCallback } from "react";
import { Transaction } from "../types";
import { useUpdateTransactionsBatch } from ".";
import { getTransactionsToBlock } from "../utils";

/**
 * Custom hook for handling transaction blocking operations
 * @param transactions - Array of transactions to potentially block
 * @returns Object with block function and loading state
 */
export const useTransactionBlocking = (transactions: Transaction[] = []) => {
  const updateTransactionsMutation = useUpdateTransactionsBatch();

  const blockInProgressTransactions = useCallback(async () => {
    if (!transactions.length) return;

    const transactionsToUpdate = getTransactionsToBlock(transactions);

    if (transactionsToUpdate.length > 0) {
      await updateTransactionsMutation.mutateAsync(transactionsToUpdate);
    }
  }, [transactions, updateTransactionsMutation]);

  return {
    blockInProgressTransactions,
    isBlocking: updateTransactionsMutation.isPending,
  };
};
