import Navbar from "./components/navbar";
import Home from "./pages/Home";
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Liver from "./pages/Liver";
import Info from "./pages/Info";
import Doctors from "./pages/Doctors";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/liver-disease-detection" element={<Liver />}/>
          <Route path="/heart-disease-detection" element={<Liver />}/>
          <Route path="/breat-cancer-detection" element={<Liver />}/>
          <Route path="/diabetes-detection" element={<Liver />}/>
          <Route path="/parkinsons-detection" element={<Liver />}/>
          <Route path="/doctors-panel" element={<Doctors />}/>
          <Route path="/information" element={<Info />}/>
        
          </Routes>
      </div>
    </Router>
  );

}

export default App;
