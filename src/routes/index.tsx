import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Summary } from "../pages";
import planetRoutes from "./PlanetRoutes";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route key="summary" path="/" element={<Summary />} />
        {planetRoutes}
      </Routes>
    </Router>
  );
};

export default AppRoutes;
