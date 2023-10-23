import React from "react";
// Pages
import LandingPage from "./pages/LandingPage";
import CarbonCalculatorPage from "./pages/CarbonCalculatorPage";
import GetInvolvedPage from "./pages/GetInvolvedPage";
import CarbonEmissions from "./pages/CarbonEmissions";
import ClimateNews from "./pages/ClimateNews";
// Nav Bar
import NavBar from "./components/NavBar";
// React Routing
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Routes>
        <Route path="/" element={<LandingPage/>}/>
        <Route path="/CarbonCalculator" element={<CarbonCalculatorPage/>}/>
        <Route path="/CarbonEmissions" element={<CarbonEmissions/>}/>
        <Route path="/GetInvolved" element={<GetInvolvedPage/>}/>
        <Route path="/ClimateNews" element={<ClimateNews/>}/>
      </Routes>
    </div>
  );
}

export default App;
