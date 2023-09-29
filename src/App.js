import React from "react";
// Pages
import LandingPage from "./pages/LandingPage";
import CarbonCalculatorPage from "./pages/CarbonCalculatorPage";
import GetInvolvedPage from "./pages/GetInvolvedPage";
// React Routing
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage/>}/>
        <Route path="/CarbonCalculator" element={<CarbonCalculatorPage/>}/>
        <Route path="/GetInvolved" element={<GetInvolvedPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
