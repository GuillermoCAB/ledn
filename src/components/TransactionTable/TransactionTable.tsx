import React, { useMemo, useState } from "react";
import { useTransactionsByUsers, useUsersByPlanet } from "../../hooks";
import { Group, Paper, Text } from "@mantine/core";
import { CurrencyOpts, Transaction } from "../../types";
import { ErrorState } from "..";
import { tableStyles } from "./tableStyles";
import TableHeader from "./TableHeader";
import TransactionRow from "./TransactionRow";
import CurrencyFilter from "./CurrencyFilter";
import { cardStyles, StyledScrollArea, textShadows } from "../commonStyles";
import { TransactionTableSkeleton } from "../skeletons";

interface TransactionTableProps {
  id: string;
}

export const TransactionTable: React.FC<TransactionTableProps> = React.memo(
  ({ id }) => {
    const [selectedCurrency, setSelectedCurrency] = useState<
      CurrencyOpts | "all"
    >("all");

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

    const filteredTransactions = useMemo(() => {
      if (!transactionsData?.transactions) return [];

      return transactionsData.transactions.filter(
        (transaction: Transaction) => {
          if (selectedCurrency === "all") return true;
          return transaction.currency === selectedCurrency;
        }
      );
    }, [transactionsData?.transactions, selectedCurrency]);

    if (transactionsLoading || usersLoading) {
      return <TransactionTableSkeleton />;
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
      <Paper
        shadow="xl"
        p={{ base: "sm", sm: "md", lg: "xl" }}
        radius="lg"
        mb="xl"
        style={cardStyles}
      >
        <Group
          justify="space-between"
          mb={{ base: "md", sm: "lg", lg: "xl" }}
          gap="sm"
          wrap="wrap"
        >
          <Text size="xl" fw={700} c="coruscant.3" style={textShadows.medium}>
            📋 Transaction History
          </Text>
          <CurrencyFilter
            selectedCurrency={selectedCurrency}
            onCurrencyChange={setSelectedCurrency}
          />
        </Group>

        {filteredTransactions.length > 0 ? (
          <StyledScrollArea>
            <table style={{ ...tableStyles.table, minWidth: "600px" }}>
              <TableHeader
                columns={[
                  { label: "Date", key: "date" },
                  { label: "User ID", key: "user" },
                  { label: "Amount (GCS)", key: "gcs" },
                  { label: "Amount (ICS)", key: "ics" },
                  { label: "Status", key: "status" },
                ]}
              />
              <tbody>
                {filteredTransactions.map(
                  (transaction: Transaction, index: number) => (
                    <TransactionRow
                      key={transaction.id}
                      transaction={transaction}
                      index={index}
                    />
                  )
                )}
              </tbody>
            </table>
          </StyledScrollArea>
        ) : (
          <Text c="gray.5" mt="md">
            No transactions found for users on this planet.
          </Text>
        )}
      </Paper>
    );
  }
);
