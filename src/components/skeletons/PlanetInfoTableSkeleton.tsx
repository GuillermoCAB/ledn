import { Card, Grid, Skeleton, Stack } from "@mantine/core";
import { cardStyles } from "../commonStyles";

const PlanetInfoTableSkeleton: React.FC = () => {
  return (
    <Grid.Col span={{ base: 12, lg: 4 }}>
      <Card shadow="xl" p="xl" radius="lg" style={cardStyles}>
        <Skeleton height={32} width="60%" mx="auto" mb="lg" />
        
        <Stack gap="lg">
          {Array.from({ length: 4 }).map((_, index) => (
            <div key={index} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "0.75rem" }}>
              <Skeleton height={14} width="40%" />
              <Skeleton height={28} width="50%" radius="xl" />
            </div>
          ))}
        </Stack>
      </Card>
    </Grid.Col>
  );
};

export default PlanetInfoTableSkeleton;