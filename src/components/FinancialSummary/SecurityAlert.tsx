import { Alert, Button, Group, Text } from "@mantine/core";
import { financialSummaryStyles } from "./financialSummaryStyles";

interface SecurityAlertProps {
  inProgressCount: number;
  onBlockTransactions: () => void;
  isBlocking: boolean;
}

export const SecurityAlert: React.FC<SecurityAlertProps> = ({
  inProgressCount,
  onBlockTransactions,
  isBlocking,
}) => {
  if (inProgressCount === 0) {
    return null;
  }

  return (
    <Alert
      color="orange"
      mt="xl"
      title={<Text fw={600}>Security Alert</Text>}
      style={financialSummaryStyles.securityAlertStyles}
    >
      <Group justify="space-between" align="center">
        <Text size="md" fw={500}>
          {inProgressCount} suspicious in-progress transactions detected
        </Text>
        <Button
          color="red"
          size="md"
          loading={isBlocking}
          onClick={onBlockTransactions}
          style={financialSummaryStyles.blockButtonStyles}
        >
          Block All Transactions
        </Button>
      </Group>
    </Alert>
  );
};
