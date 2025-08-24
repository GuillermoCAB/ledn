import { Route } from "react-router-dom";

const planetRoutes = [
  // Initial implementation remove in favor of real component
  <Route
    key="planet-detail"
    path="/planet/:id"
    element={<div>Planet Detail Page</div>}
  />,
];

export default planetRoutes;
