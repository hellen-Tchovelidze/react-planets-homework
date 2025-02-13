import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import HomePage from "./Pages/HomePage/HomePage";
import PlanetDetailPage from "./Pages/PlanetDetailPage/PlanetDetailPage";
import WelcomePage from "./Pages/Welcome/WelcomePage"


function App() {
  return (
    <Router >
    <HomePage />
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/planet/:name" element={<PlanetDetailPage />} />
      </Routes>
    </Router>
  );
}

export default App;
 

