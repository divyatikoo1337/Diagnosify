

import React from 'react';

function Navbar() {
  return (
    <nav className="bg-green-500 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-black font-bold text-2xl">Diagnosify</div>
        <ul className="flex space-x-4">
          <li><a href="#" className="hover:text-gray-200">Home</a></li>
          <li><a href="#" className="hover:text-gray-200">Diabetes </a></li>
          <li><a href="#" className="hover:text-gray-200">Heart</a></li>
          <li><a href="#" className="hover:text-gray-200">Parkinson's </a></li>
          <li><a href="#" className="hover:text-gray-200">Liver Cancer </a></li>
          <li><a href="#" className="hover:text-gray-200">Breast Cancer</a></li>
          <li><a href="#" className="hover:text-gray-200">Doctors</a></li>
          <li><a href="#" className="hover:text-gray-200">Info</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;

