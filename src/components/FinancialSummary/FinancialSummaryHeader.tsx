import { Group, Text } from "@mantine/core";

export const FinancialSummaryHeader: React.FC = () => {
  return (
    <Group justify="space-between" mb="xl">
      <Text size="2xl" fw={700}>
        Financial Summary
      </Text>
      <Text size="xs" c="gray.4">
        Live Data
      </Text>
    </Group>
  );
};
