import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Summary } from "../pages";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route key="summary" path="/" element={<Summary />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
