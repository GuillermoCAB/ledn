import { Alert, Badge, Card, Grid, Group, Paper, Text } from "@mantine/core";
import {
  useExchangeRate,
  useTransactionsByUsers,
  useUsersByPlanet,
  useFinancialSummary,
} from "../hooks";
import { useMemo } from "react";

interface TransactionTableProps {
  id: string;
}

export const FinancialSummary: React.FC<TransactionTableProps> = ({ id }) => {
  const { data: exchangeRate } = useExchangeRate();
  const { data: usersData } = useUsersByPlanet(id!);

  const userIds = useMemo(
    () => usersData?.users?.map((user) => user.id) || [],
    [usersData]
  );

  const { data: transactionsData } = useTransactionsByUsers(userIds);

  const { gcsTotal, icsTotal, gcsTransactions, icsTransactions } =
    useFinancialSummary({ transactions: transactionsData?.transactions });

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
            <Card p="xl" radius="lg">
              <Text
                size="sm"
                c="blue.3"
                fw={600}
                tt="uppercase"
                style={{ letterSpacing: "1px" }}
              >
                Galactic Credit Standard
              </Text>
              <Text size="3xl" fw={900} c="blue.4" mb="xs">
                {gcsTotal.toFixed(2)} GCS
              </Text>
              <Text size="sm" c="blue.6" mb="md">
                {gcsTotal.div(exchangeRate?.rate || 1).toFixed(2)} ICS
              </Text>
              <Badge
                variant="gradient"
                gradient={{ from: "blue.4", to: "blue.6" }}
                size="lg"
                fullWidth
              >
                {gcsTransactions} transactions
              </Badge>
            </Card>
          </Grid.Col>

          <Grid.Col span={{ base: 12, sm: 6 }}>
            <Card p="xl" radius="lg">
              <Text size="sm" c="orange.3" fw={600} tt="uppercase">
                Imperial Crown Standard
              </Text>
              <Text size="3xl" fw={900} c="orange.4" mb="xs">
                {icsTotal.toFixed(2)} ICS
              </Text>
              <Text size="sm" c="orange.6" mb="md">
                {icsTotal.mul(exchangeRate?.rate || 1).toFixed(2)} GCS
              </Text>
              <Badge variant="gradient" size="lg" fullWidth>
                {icsTransactions} transactions
              </Badge>
            </Card>
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
