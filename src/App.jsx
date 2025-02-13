import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage/HomePage";
import PlanetDetailPage from "./Pages/PlanetDetailPage/PlanetDetailPage";


function App() {
  return (
    <Router >
      <HomePage />
      <Routes>
        {/* <Route path="/" element={<HomePage />} /> */}
        <Route path="/planet/:name" element={<PlanetDetailPage />} />
      </Routes>
    </Router>
  );
}

export default App;
 

