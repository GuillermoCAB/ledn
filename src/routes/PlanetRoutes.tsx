import { Route } from "react-router-dom";
import { PlanetDetail } from "../pages";

const planetRoutes = [
  <Route key="planet-detail" path="/planet/:id" element={<PlanetDetail />} />,
];

export default planetRoutes;
