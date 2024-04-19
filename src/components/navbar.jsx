

import React from 'react';
import { Link } from 'react-router-dom';


function Navbar() {
  return (
    <nav className="bg-green-500 p-4">
      {/* <div className="container mx-auto flex justify-between items-center">
        <div className="text-black font-bold text-2xl">Diagnosify</div>
        <ul className="flex space-x-4">
          <li><a href="/" className="hover:text-gray-200">Home</a></li>
          <li><a href="#" className="hover:text-gray-200">Diabetes </a></li>
          <li><a href="#" className="hover:text-gray-200">Heart</a></li>
          <li><a href="#" className="hover:text-gray-200">Parkinson's </a></li>
          <li><a href="#" className="hover:text-gray-200">Liver Cancer </a></li>
          <li><a href="#" className="hover:text-gray-200">Breast Cancer</a></li>
          <li><a href="#" className="hover:text-gray-200">Doctors</a></li>
          <li><a href="#" className="hover:text-gray-200">Info</a></li>
        </ul>
      </div> */}

      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white font-bold text-2xl">Diagnosify</div>
        <ul className="flex space-x-4">
          <li><Link to="/" className="text-white hover:text-gray-200">Home</Link></li>
          <li><Link to="/diabetes" className="text-white hover:text-gray-200">Diabetes</Link></li>
          <li><Link to="/heart" className="text-white hover:text-gray-200">Heart</Link></li>
          <li><Link to="/parkinsons" className="text-white hover:text-gray-200">Parkinson's</Link></li>
          <li><Link to="/liver-disease-detection" className="text-white hover:text-gray-200">Liver Cancer</Link></li>
          <li><Link to="/breast-cancer" className="text-white hover:text-gray-200">Breast Cancer</Link></li>
          <li><Link to="/doctors-panel" className="text-white hover:text-gray-200">Doctors</Link></li>
          <li><Link to="/information" className="text-white hover:text-gray-200">Info</Link></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;

