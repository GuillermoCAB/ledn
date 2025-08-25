import React from "react";
import { Card, Text, Badge, Group, Button, Box, Tooltip } from "@mantine/core";
import { Link } from "react-router-dom";
import { Planet } from "../types";
import { checkIfPropIsUnknown, formatNumericValue } from "../utils";
import {
  cardStyles,
  climateBadgeStyles,
  gradients,
  populationInfoStyles,
} from "./commonStyles";

interface PlanetCardProps {
  planet: Planet;
}

export const PlanetCard: React.FC<PlanetCardProps> = ({ planet }) => {
  return (
    <Card shadow="lg" p="lg" radius="md" h="100%" style={cardStyles}>
      <Group justify="space-between" mb="lg" align="start">
        <Box>
          <Text
            fw={700}
            size="xl"
            c="coruscant.3"
            mb="xs"
            style={(theme) => ({ textShadow: theme.other.textShadow.light })}
          >
            {planet.name}
          </Text>
          <Group gap="xs">
            <Text size="sm" c="gray.4">
              {planet.residents.length} residents
            </Text>
          </Group>
        </Box>
      </Group>

      <Group mb="lg" gap="md">
        <Tooltip label={`Climate: ${planet.climate}`} position="top">
          <Badge variant="outline" size="md" style={climateBadgeStyles}>
            {planet.climate}
          </Badge>
        </Tooltip>
        <Tooltip label={`Terrain: ${planet.terrain}`} position="top">
          <Badge variant="outline" size="md" style={climateBadgeStyles}>
            {planet.terrain}
          </Badge>
        </Tooltip>
      </Group>

      <Text size="sm" c="gray.4" mb="lg" style={populationInfoStyles}>
        👥 Population: {formatNumericValue(planet.population)}
      </Text>

      <Button
        component={Link}
        to={`/planet/${planet.id}`}
        variant="gradient"
        fullWidth
        mt="auto"
        size="md"
        gradient={gradients.coruscant}
        style={{ transition: "all 0.3s ease" }}
      >
        View Financial Details
      </Button>
    </Card>
  );
};
