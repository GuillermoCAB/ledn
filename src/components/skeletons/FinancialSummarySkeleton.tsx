import { Grid, Paper, Skeleton, Card, Stack, Group } from "@mantine/core";
import { cardStyles, currencyCardStyles } from "../commonStyles";

const CurrencyCardSkeleton: React.FC = () => (
  <Card p="xl" radius="lg" withBorder style={currencyCardStyles}>
    <Skeleton height={14} width="40%" mb="xs" />
    <Skeleton height={40} width="70%" mb="xs" />
    <Skeleton height={14} width="50%" mb="md" />
    <Skeleton height={36} width="100%" radius="lg" />
  </Card>
);

const FinancialSummarySkeleton: React.FC = () => {
  return (
    <Grid.Col span={{ base: 12, lg: 8 }}>
      <Paper shadow="xl" p="xl" radius="lg" style={cardStyles}>
        <Skeleton height={28} width="50%" mb="lg" />

        <Grid>
          <Grid.Col span={{ base: 12, sm: 6 }}>
            <CurrencyCardSkeleton />
          </Grid.Col>
          <Grid.Col span={{ base: 12, sm: 6 }}>
            <CurrencyCardSkeleton />
          </Grid.Col>
        </Grid>

        <Stack gap="md" mt="xl">
          <Skeleton height={60} radius="md" />
          
          <div style={{ border: "1px solid rgba(255,255,255,0.1)", borderRadius: "8px", padding: "1rem" }}>
            <Group justify="space-between" align="center">
              <div>
                <Skeleton height={16} width="60%" mb="xs" />
                <Skeleton height={12} width="80%" />
              </div>
              <Skeleton height={36} width={120} radius="md" />
            </Group>
          </div>
        </Stack>
      </Paper>
    </Grid.Col>
  );
};

export default FinancialSummarySkeleton;