import "@mantine/core/styles.css";

import {
  ColorSchemeScript,
  Container,
  createTheme,
  MantineProvider,
} from "@mantine/core";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import AppRoutes from "./routes";
import StarBackground from "./components/StarBackground";

const queryClient = new QueryClient();
const theme = createTheme({});

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <ColorSchemeScript defaultColorScheme="auto" />
      <MantineProvider theme={theme} defaultColorScheme="auto">
        <StarBackground />
        <Container size="xl" p="md">
          <AppRoutes />
        </Container>
        <ReactQueryDevtools initialIsOpen={false} />
      </MantineProvider>
    </QueryClientProvider>
  );
};

export default App;
