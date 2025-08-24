import { Route } from "react-router-dom";
import { PlanetDetail } from "../pages";

const planetRoutes = [
  // Initial implementation remove in favor of real component
  <Route key="planet-detail" path="/planet/:id" element={<PlanetDetail />} />,
];

export default planetRoutes;
