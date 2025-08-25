import { Alert, Grid, Group, Paper, Text } from "@mantine/core";
import {
  useExchangeRate,
  useTransactionsByUsers,
  useUsersByPlanet,
  useFinancialSummary,
} from "../hooks";
import { useMemo } from "react";
import { CurrencyCard } from "./CurrencyCard";
import { CurrencyOpts } from "../types";
import { LoadingState } from "./LoadingState";
import { ErrorState } from "./ErrorState";

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
  } = useUsersByPlanet(id!);

  const userIds = useMemo(
    () => usersData?.users?.map((user) => user.id) || [],
    [usersData]
  );

  const {
    data: transactionsData,
    isLoading: transactionsLoading,
    error: transactionsError,
  } = useTransactionsByUsers(userIds);

  const { gcsTotal, icsTotal, gcsTransactions, icsTransactions } =
    useFinancialSummary({ transactions: transactionsData?.transactions });

  const exchangeRateValue = parseFloat(exchangeRate?.rate || "1");

  const gcsToIcs = gcsTotal.div(exchangeRateValue);
  const icsToGcs = icsTotal.mul(exchangeRateValue);

  if (exchangeRateLoading || usersLoading || transactionsLoading) {
    return <LoadingState />;
  }

  if (exchangeRateError || usersError || transactionsError) {
    return (
      <ErrorState
        title="Error loading transactions"
        message="Failed to load transaction data. Please try again."
      />
    );
  }

  return (
    <Grid.Col span={{ base: 12, lg: 8 }}>
      <Paper shadow="xl" p="xl" radius="lg">
        <Group justify="space-between" mb="xl">
          <Text size="2xl" fw={700}>
            💰 Financial Summary
          </Text>
          <Text size="xs" c="gray.4">
            Live Data
          </Text>
        </Group>

        <Grid>
          <Grid.Col span={{ base: 12, sm: 6 }}>
            <CurrencyCard
              currency={CurrencyOpts.GCS}
              total={gcsTotal}
              convertedAmount={gcsToIcs}
              transactionCount={gcsTransactions}
            />
          </Grid.Col>

          <Grid.Col span={{ base: 12, sm: 6 }}>
            <CurrencyCard
              currency={CurrencyOpts.ICS}
              total={icsTotal}
              convertedAmount={icsToGcs}
              transactionCount={icsTransactions}
            />
          </Grid.Col>
        </Grid>

        {exchangeRate && (
          <Alert
            color="blue"
            mt="xl"
            title={<Text fw={600}>Live Exchange Rate</Text>}
          >
            <Group justify="space-between">
              <Text size="lg" fw={600}>
                1 ICS = {exchangeRate.rate} GCS
              </Text>
              <Text size="sm" c="dimmed">
                Updated every second
              </Text>
            </Group>
          </Alert>
        )}
      </Paper>
    </Grid.Col>
  );
};
