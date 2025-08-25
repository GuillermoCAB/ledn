import { Link, useParams } from "react-router-dom";
import { Text, Grid, Divider, Button } from "@mantine/core";
import { ErrorState, TransactionTable } from "../components";
import { FinancialSummary } from "../components/FinancialSummary";
import PlanetInfoTable from "../components/PlanetInfoTable";
import { gradients } from "../components/commonStyles";

const PlanetDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  if (!id) {
    return (
      <ErrorState
        title="Error missing id"
        message="Failed render due to missing id. Please try again."
      />
    );
  }

  return (
    <>
      <Button
        component={Link}
        to="/"
        variant="gradient"
        gradient={gradients.coruscant}
      >
        ← Back to Galaxy
      </Button>

      <Grid mt="xl">
        <PlanetInfoTable id={id!} />

        <FinancialSummary id={id!} />
      </Grid>

      <Divider
        my="xl"
        size="sm"
        label={
          <Text size="sm" fw={600}>
            Transaction Records
          </Text>
        }
        labelPosition="center"
      />

      <TransactionTable id={id!} />
    </>
  );
};

export default PlanetDetail;
