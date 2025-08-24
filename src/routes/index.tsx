import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { MainPage } from "../pages";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route key="main" path="/" element={<MainPage />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
