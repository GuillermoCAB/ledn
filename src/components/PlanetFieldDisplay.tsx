import { Text, Group, Badge } from "@mantine/core";
import { memo } from "react";
import { gradients, planetFieldDisplayStyles } from "./commonStyles";

interface PlanetFieldDisplayProps {
  label: string;
  value: string;
}

const PlanetFieldDisplay: React.FC<PlanetFieldDisplayProps> = memo(
  ({ label, value }) => (
    <Group justify="space-between" p="md" style={planetFieldDisplayStyles}>
      <Text size="sm" fw={600} c="coruscant.4">
        {label}:
      </Text>
      <Badge variant="gradient" gradient={gradients.coruscant} size="lg">
        {value}
      </Badge>
    </Group>
  )
);

export default PlanetFieldDisplay;
