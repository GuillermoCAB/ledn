import { Text, Grid, Box } from "@mantine/core";

const MainPage: React.FC = () => {
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

      <Grid>{/* Add Planets Here */}</Grid>
    </Box>
  );
};

export default MainPage;
