import { Text, Card, Grid, Stack } from "@mantine/core";
import { useMemo } from "react";
import { usePlanet } from "../hooks";
import { ErrorState, LoadingState } from "../components";
import { PLANET_FIELDS } from "../constants/planets";
import PlanetFieldDisplay from "./PlanetFieldDisplay";

interface PlanetInfoTableProps {
  id: string;
  withGridWrapper?: boolean;
}

const PlanetInfoTable: React.FC<PlanetInfoTableProps> = ({ id }) => {
  const {
    data: planet,
    isLoading: planetLoading,
    error: planetError,
  } = usePlanet(id);

  const planetFields = useMemo(
    () =>
      PLANET_FIELDS.map(({ label, key, formatter }) => {
        const value = planet?.[key] as string;
        const formattedValue = formatter ? formatter(value) : value;

        return {
          key,
          label,
          value: formattedValue,
        };
      }),
    [planet]
  );

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
    <Grid.Col span={{ base: 12, lg: 4 }}>
      <Card shadow="xl" p="xl" radius="lg">
        <Text size="2xl" fw={700} ta="center" mb="lg">
          {planet.name}
        </Text>
        <Stack gap="lg">
          {planetFields.map(({ key, label, value }) => (
            <PlanetFieldDisplay key={key} label={label} value={value} />
          ))}
        </Stack>
      </Card>
    </Grid.Col>
  );
};

export default PlanetInfoTable;
