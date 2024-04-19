import Navbar from "./components/navbar";
import Home from "./pages/Home";
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Liver from "./pages/Liver";
import Info from "./pages/Info";
import Doctors from "./pages/Doctors";
import MLHeartPredictor from "./components/MLHeartPredictor";
import MLDiabetesPredictor from "./components/MLDiabetesPredictor";
import MLParkinsonsPredictor from "./components/MLParkinsonsPredictor";
import MLLiverPredictor from "./components/MLLiverPredictor";
import MLCancerPredictor from "./components/MLCancerPredictor";
function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/liver-disease-detection" element={<MLLiverPredictor />}/>
          <Route path="/heart-disease-detection" element={<MLHeartPredictor />}/>
          <Route path="/breast-cancer-detection" element={<MLCancerPredictor />}/>
          <Route path="/diabetes-detection" element={<MLDiabetesPredictor />}/>
          <Route path="/parkinsons-detection" element={<MLParkinsonsPredictor />}/>
          <Route path="/doctors-panel" element={<Doctors />}/>
          <Route path="/information" element={<Info />}/>
          </Routes>
      </div>
    </Router>
  );

}

export default App;
