import { Text, Grid, Box } from "@mantine/core";
import { useFilteredPlanets } from "../hooks";
import { Planet } from "../types";
import PlanetCard from "../components/PlanetCard";
import SearchInput from "../components/SearchInput";
import { ErrorState, LoadingState } from "../components";

const Summary: React.FC = () => {
  const { filteredPlanets, isLoading, error, searchTerm, setSearchTerm } =
    useFilteredPlanets();

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  if (isLoading) {
    return <LoadingState />;
  }

  if (error) {
    return (
      <ErrorState
        title="Error loading planets"
        message="Failed to load planets data. Please try again."
      />
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

      <SearchInput
        placeholder="🔍 Search planets by name..."
        value={searchTerm}
        onChange={handleSearchChange}
      />

      <Grid>
        {filteredPlanets.map((planet: Planet) => (
          <Grid.Col key={planet.id} span={{ base: 12, sm: 6, lg: 4 }}>
            <PlanetCard planet={planet} />
          </Grid.Col>
        ))}
      </Grid>
    </Box>
  );
};

export default Summary;
