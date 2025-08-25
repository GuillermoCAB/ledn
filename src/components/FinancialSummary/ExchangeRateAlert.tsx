import { Alert, Group, Text } from "@mantine/core";
import { ExchangeRate } from "../../types";
import { formatExchangeRateText } from "../../utils";
import { exchangeRateAlertStyles } from "../commonStyles";

interface ExchangeRateAlertProps {
  exchangeRate: ExchangeRate;
}

export const ExchangeRateAlert: React.FC<ExchangeRateAlertProps> = ({
  exchangeRate,
}) => {
  return (
    <Alert
      color="blue"
      mt="xl"
      title={<Text fw={600}>Live Exchange Rate</Text>}
      style={exchangeRateAlertStyles}
    >
      <Group justify="space-between">
        <Text size="lg" fw={600} c="white">
          {formatExchangeRateText(exchangeRate.rate)}
        </Text>
        <Text size="sm" c="dimmed">
          Updated every second
        </Text>
      </Group>
    </Alert>
  );
};
