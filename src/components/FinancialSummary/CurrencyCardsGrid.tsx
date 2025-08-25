import { Grid } from "@mantine/core";
import { CurrencyCard } from "../CurrencyCard";
import { CurrencyOpts, FinancialSummary } from "../../types";
import { convertGcsToIcs, convertIcsToGcs } from "../../utils";

interface CurrencyCardsGridProps {
  financialSummary: FinancialSummary;
  exchangeRate?: string;
}

export const CurrencyCardsGrid: React.FC<CurrencyCardsGridProps> = ({
  financialSummary,
  exchangeRate,
}) => {
  const { gcsTotal, icsTotal, gcsTransactions, icsTransactions } =
    financialSummary;

  const gcsToIcs = convertGcsToIcs(gcsTotal, exchangeRate);
  const icsToGcs = convertIcsToGcs(icsTotal, exchangeRate);

  return (
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
  );
};
