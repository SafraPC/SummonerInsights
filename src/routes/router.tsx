import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Login } from "../screens/Login";
import { Home } from "../screens/Home";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="home" element={<Home />} />
      </Routes>
    </Router>
  );
};

export { AppRoutes };
