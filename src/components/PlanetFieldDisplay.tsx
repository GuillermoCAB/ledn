import { Text, Group } from "@mantine/core";
import { memo } from "react";

interface PlanetFieldDisplayProps {
  label: string;
  value: string;
}

const PlanetFieldDisplay: React.FC<PlanetFieldDisplayProps> = memo(
  ({ label, value }) => (
    <Group justify="space-between" p="md">
      <Text size="sm" fw={600}>
        {label}:
      </Text>
      <Text size="sm" fw={700} c="gray.3">
        {value}
      </Text>
    </Group>
  )
);

export default PlanetFieldDisplay;
