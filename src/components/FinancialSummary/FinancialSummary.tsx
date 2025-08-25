import { Grid, Paper } from "@mantine/core";
import {
  useExchangeRate,
  useTransactionsByUsers,
  useUsersByPlanet,
  useFinancialSummary,
  useTransactionBlocking,
} from "../../hooks";
import { useMemo } from "react";
import { LoadingState } from "../LoadingState";
import { ErrorState } from "../ErrorState";
import { FinancialSummaryHeader } from "./FinancialSummaryHeader";
import { CurrencyCardsGrid } from "./CurrencyCardsGrid";
import { ExchangeRateAlert } from "./ExchangeRateAlert";
import { SecurityAlert } from "./SecurityAlert";
import { cardStyles } from "../commonStyles";

interface FinancialSummaryProps {
  id: string;
}

export const FinancialSummary: React.FC<FinancialSummaryProps> = ({ id }) => {
  const {
    data: exchangeRate,
    isLoading: exchangeRateLoading,
    error: exchangeRateError,
  } = useExchangeRate();

  const {
    data: usersData,
    isLoading: usersLoading,
    error: usersError,
  } = useUsersByPlanet(id);

  const userIds = useMemo(
    () => usersData?.users?.map((user) => user.id) || [],
    [usersData]
  );

  const {
    data: transactionsData,
    isLoading: transactionsLoading,
    error: transactionsError,
  } = useTransactionsByUsers(userIds);

  const financialSummary = useFinancialSummary({
    transactions: transactionsData?.transactions,
  });

  const { blockInProgressTransactions, isBlocking } = useTransactionBlocking(
    transactionsData?.transactions
  );

  if (exchangeRateLoading || usersLoading || transactionsLoading) {
    return <LoadingState />;
  }

  if (exchangeRateError || usersError || transactionsError) {
    return (
      <ErrorState
        title="💰 Financial Summary"
        message="Failed to load transaction data. Please try again."
      />
    );
  }

  return (
    <Grid.Col span={{ base: 12, lg: 8 }}>
      <Paper shadow="xl" p="xl" radius="lg" style={cardStyles}>
        <FinancialSummaryHeader />

        <CurrencyCardsGrid
          financialSummary={financialSummary}
          exchangeRate={exchangeRate?.rate}
        />

        {exchangeRate && <ExchangeRateAlert exchangeRate={exchangeRate} />}

        <SecurityAlert
          inProgressCount={financialSummary.inProgressCount}
          onBlockTransactions={blockInProgressTransactions}
          isBlocking={isBlocking}
        />
      </Paper>
    </Grid.Col>
  );
};
