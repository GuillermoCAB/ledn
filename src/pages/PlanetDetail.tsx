import { Link, useParams } from "react-router-dom";
import {
  Text,
  Card,
  Grid,
  Group,
  Paper,
  Divider,
  Stack,
  Button,
} from "@mantine/core";
import { usePlanet } from "../hooks";
import { checkIfPropIsUnknown } from "../utils";
import { ErrorState, LoadingState, TransactionTable } from "../components";

const PlanetDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  const {
    data: planet,
    isLoading: planetLoading,
    error: planetError,
  } = usePlanet(id!);

  if (planetLoading) {
    return <LoadingState />;
  }

  if (planetError || !planet) {
    return (
      <ErrorState
        title="Error loading planet"
        message="Failed to load planet data. Please try again."
      />
    );
  }

  return (
    <>
      <Button component={Link} to="/" variant="gradient">
        ← Back to Galaxy
      </Button>

      <Grid mt="xl">
        <Grid.Col span={{ base: 12, lg: 4 }}>
          <Card shadow="xl" p="xl" radius="lg">
            <Text size="2xl" fw={700} ta="center">
              {planet.name}
            </Text>

            <Stack gap="lg">
              <Group justify="space-between" p="md">
                <Text size="sm" fw={600}>
                  Climate:
                </Text>
                <Text size="sm" fw={700} c="gray.3">
                  {planet.climate}
                </Text>
              </Group>

              <Group justify="space-between" p="md">
                <Text size="sm" fw={600}>
                  Terrain:
                </Text>
                <Text size="sm" fw={700} c="gray.3">
                  {planet.terrain}
                </Text>
              </Group>

              <Group justify="space-between" p="md">
                <Text size="sm" fw={600}>
                  Population:
                </Text>
                <Text size="sm" fw={700} c="gray.3">
                  {checkIfPropIsUnknown(planet.population)
                    ? planet.population
                    : parseInt(planet.population).toLocaleString()}
                </Text>
              </Group>

              <Group justify="space-between" p="md">
                <Text size="sm" fw={600}>
                  Gravity:
                </Text>
                <Text size="sm" fw={700} c="gray.3">
                  {planet.gravity}
                </Text>
              </Group>
            </Stack>
          </Card>
        </Grid.Col>

        <Grid.Col span={{ base: 12, lg: 8 }}>
          <Paper shadow="xl" p="xl" radius="lg">
            <Text size="2xl" fw={700}>
              Financial Summary - Live Data
            </Text>
          </Paper>
        </Grid.Col>
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
