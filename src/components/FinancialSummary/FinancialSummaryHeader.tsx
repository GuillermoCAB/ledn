import { Group, Text } from "@mantine/core";
import { textShadows } from "../commonStyles";

export const FinancialSummaryHeader: React.FC = () => {
  return (
    <Group justify="space-between" mb="xl">
      <Text size="2xl" fw={700} c="coruscant.3" style={textShadows.medium}>
        💰 Financial Summary
      </Text>
      <Text size="xs" c="gray.4">
        Live Data
      </Text>
    </Group>
  );
};
