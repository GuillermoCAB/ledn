import { Text, Grid, Box, useMantineTheme, Title, Stack } from "@mantine/core";
import { useFilteredPlanets } from "../hooks";
import { Planet } from "../types";
import {
  ErrorState,
  LoadingState,
  PlanetCard,
  SearchInput,
  TerrainFilter,
  ClimateFilter,
} from "../components";

const Summary: React.FC = () => {
  const theme = useMantineTheme();

  const {
    filteredPlanets,
    isLoading,
    error,
    searchTerm,
    setSearchTerm,
    selectedTerrain,
    setSelectedTerrain,
    selectedClimate,
    setSelectedClimate,
  } = useFilteredPlanets();

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
        <Title
          order={1}
          fw={700}
          c="coruscant.4"
          mb="md"
          style={{ textShadow: theme.other.textShadow.strong }}
        >
          🌌 CORUSCANT BANK - Galactic Planets Overview 🌌
        </Title>

        <Text
          c="gray.3"
          size="lg"
          mb="lg"
          style={{ textShadow: theme.other.textShadow.medium }}
        >
          Monitor financial activities across the galaxy. Search for planets to
          analyze their economic status.
        </Text>
      </Box>

      <Stack gap="lg">
        <SearchInput
          placeholder="🔍 Search planets by name..."
          value={searchTerm}
          onChange={handleSearchChange}
        />

        <Stack gap="sm">
          <Text
            size="sm"
            fw={600}
            c="coruscant.4"
            style={{ textShadow: theme.other.textShadow.medium }}
          >
            🌍 Filter by Terrain
          </Text>
          <TerrainFilter
            selectedTerrain={selectedTerrain}
            onTerrainChange={setSelectedTerrain}
          />
        </Stack>

        <Stack gap="sm" mb="xl">
          <Text
            size="sm"
            fw={600}
            c="coruscant.4"
            style={{ textShadow: theme.other.textShadow.medium }}
          >
            🌡️ Filter by Climate
          </Text>
          <ClimateFilter
            selectedClimate={selectedClimate}
            onClimateChange={setSelectedClimate}
          />
        </Stack>
      </Stack>

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
