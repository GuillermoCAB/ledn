import React from "react";
import { Card, Text, Badge, Group, Button, Box, Tooltip } from "@mantine/core";
import { Link } from "react-router-dom";
import { Planet } from "../types";

interface PlanetCardProps {
  planet: Planet;
}

const PlanetCard: React.FC<PlanetCardProps> = React.memo(({ planet }) => {
  return (
    <Card shadow="lg" p="lg" radius="md" h="100%">
      <Group justify="space-between" mb="lg" align="start">
        <Box>
          <Text fw={700} size="xl" mb="xs">
            {planet.name}
          </Text>
          <Group gap="xs">
            <Text size="sm" c="gray.4">
              {planet.residents.length} residents
            </Text>
          </Group>
        </Box>
        <Badge
          variant="light"
          size="lg"
          style={{
            border: `1px solid blue`,
          }}
        >
          Planet
        </Badge>
      </Group>

      <Group mb="lg" gap="md">
        <Tooltip label={`Climate: ${planet.climate}`} position="top">
          <Badge
            variant="outline"
            size="md"
            style={{
              borderColor: "darkblue",
              color: "blue",
            }}
          >
            {planet.climate}
          </Badge>
        </Tooltip>
        <Tooltip label={`Terrain: ${planet.terrain}`} position="top">
          <Badge
            variant="outline"
            size="md"
            style={{
              borderColor: "darkblue",
              color: "blue",
            }}
          >
            {planet.terrain}
          </Badge>
        </Tooltip>
      </Group>

      <Text size="sm" c="gray.4" mb="lg">
        Population: {parseInt(planet.population).toLocaleString()}
      </Text>

      <Button
        component={Link}
        to={`/planet/${planet.id}`}
        variant="gradient"
        fullWidth
        mt="auto"
        size="md"
        style={{ transition: "all 0.3s ease" }}
      >
        View Financial Details
      </Button>
    </Card>
  );
});

PlanetCard.displayName = "PlanetCard";

export default PlanetCard;
