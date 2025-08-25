import React, { useMemo } from "react";
import { useTransactionsByUsers, useUsersByPlanet } from "../../hooks";
import { Paper, Text } from "@mantine/core";
import { Transaction } from "../../types";
import { LoadingState, ErrorState } from "..";
import { tableStyles } from "./tableStyles";
import TableHeader from "./TableHeader";
import TransactionRow from "./TransactionRow";

interface TransactionTableProps {
  id: string;
}

export const TransactionTable: React.FC<TransactionTableProps> = React.memo(
  ({ id }) => {
    const { data: usersData, isLoading: usersLoading } = useUsersByPlanet(id!);

    const userIds = useMemo(
      () => usersData?.users?.map((user) => user.id) || [],
      [usersData]
    );

    const {
      data: transactionsData,
      isLoading: transactionsLoading,
      error: transactionsError,
    } = useTransactionsByUsers(userIds);

    if (transactionsLoading || usersLoading) {
      return <LoadingState />;
    }

    if (transactionsError) {
      return (
        <ErrorState
          title="Error loading transactions"
          message="Failed to load transaction data. Please try again."
        />
      );
    }

    return (
      <Paper shadow="xl" p="xl" radius="lg" mb="xl">
        <Text size="xl" fw={700}>
          Transaction History
        </Text>

        {transactionsData?.transactions.length &&
        transactionsData?.transactions.length > 0 ? (
          <div style={tableStyles.container}>
            <table style={tableStyles.table}>
              <TableHeader
                columns={[
                  { label: "Date", key: "date" },
                  { label: "User ID", key: "user" },
                  { label: "Amount (Original)", key: "amount" },
                  { label: "Amount (GCS)", key: "gcs" },
                  { label: "Amount (ICS)", key: "ics" },
                  { label: "Status", key: "status" },
                ]}
              />
              <tbody>
                {transactionsData?.transactions.map(
                  (transaction: Transaction) => (
                    <TransactionRow
                      key={transaction.id}
                      transaction={transaction}
                    />
                  )
                )}
              </tbody>
            </table>
          </div>
        ) : (
          <Text c="gray.5" mt="md">
            No transactions found for users on this planet.
          </Text>
        )}
      </Paper>
    );
  }
);
