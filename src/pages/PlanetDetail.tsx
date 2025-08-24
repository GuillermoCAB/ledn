import { useParams } from "react-router-dom";
import {
  Text,
  Card,
  Grid,
  Group,
  Loader,
  Center,
  Alert,
  Paper,
  Divider,
  Stack,
} from "@mantine/core";
import { usePlanet } from "../hooks";
import { checkIfPropIsUnknown } from "../utils";

const PlanetDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  const {
    data: planet,
    isLoading: planetLoading,
    error: planetError,
  } = usePlanet(id!);

  if (planetLoading) {
    return (
      <Center h={400}>
        <Loader size="lg" />
      </Center>
    );
  }

  if (planetError || !planet) {
    return (
      <Alert color="red" title="Error loading planet">
        Failed to load planet data. Please try again.
      </Alert>
    );
  }

  return (
    <>
      <Grid>
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

      <Paper shadow="xl" p="xl" radius="lg" mb="xl">
        <Group justify="space-between" mb="xl">
          <Text size="xl" fw={700}>
            Transaction History
          </Text>
        </Group>
      </Paper>
    </>
  );
};

export default PlanetDetail;
