import { Text, Grid, Box, Loader, Alert, Center } from "@mantine/core";
import { usePlanets } from "../hooks";
import { Planet } from "../types";
import PlanetCard from "../components/PlanetCard";

const Summary: React.FC = () => {
  const { data, isLoading, error } = usePlanets();

  if (isLoading) {
    return (
      <Center h={400}>
        <Loader size="lg" />
      </Center>
    );
  }

  if (error) {
    return (
      <Alert color="red" title="Error loading planets">
        Failed to load planets data. Please try again.
      </Alert>
    );
  }

  return (
    <Box>
      <Box mb="xl" ta="center">
        <Text size="2xl" fw={700} mb="md">
          Galactic Planets Overview
        </Text>
        <Text c="gray.3" size="lg" mb="lg">
          Monitor financial activities across the galaxy. Search for planets to
          analyze their economic status.
        </Text>
      </Box>

      {/* Add SearchInput Here */}

      <Grid>
        {data?.planets.map((planet: Planet) => (
          <Grid.Col key={planet.id} span={{ base: 12, sm: 6, lg: 4 }}>
            <PlanetCard planet={planet} />
          </Grid.Col>
        ))}
      </Grid>
    </Box>
  );
};

export default Summary;
