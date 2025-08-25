import { Badge, Card, Text } from "@mantine/core";
import { CurrencyOpts } from "../types";
import Decimal from "decimal.js";
import { CURRENCY_CONFIG } from "../constants";

interface CurrencyCardProps {
  currency: CurrencyOpts;
  total: Decimal;
  convertedAmount: Decimal;
  transactionCount: number;
  exchangeRate?: number;
}

export const CurrencyCard: React.FC<CurrencyCardProps> = ({
  currency,
  total,
  convertedAmount,
  transactionCount,
}) => {
  const config = CURRENCY_CONFIG[currency];

  return (
    <Card p="xl" radius="lg" withBorder>
      <Text
        size="sm"
        c={`${config.color}.3`}
        fw={600}
        tt="uppercase"
        style={{ letterSpacing: "1px" }}
        mb="xs"
      >
        {config.name}
      </Text>

      <Text size="3xl" fw={900} c={`${config.color}.4`} mb="xs">
        {total.toFixed(2)} {config.symbol}
      </Text>

      <Text size="sm" c={`${config.color}.6`} mb="md">
        {convertedAmount.toFixed(2)} {config.convertedSymbol}
      </Text>

      <Badge
        variant="gradient"
        gradient={{
          from: `${config.color}.4`,
          to: `${config.color}.6`,
        }}
        size="lg"
        fullWidth
      >
        {transactionCount} transaction{transactionCount !== 1 ? "s" : ""}
      </Badge>
    </Card>
  );
};
