// src/components/atoms/NavButton.js
import React from 'react';

const NavButton = ({ text, onClick, className }) => {
  return (
    <button
      onClick={onClick}
      className={`py-2 px-4 text-gray-800 hover:text-blue-500 font-semibold hover:bg-gray-200 rounded-lg transition duration-300 ease-in-out ${className}`}
    >
      {text}
    </button>
  );
};

export default NavButton;
