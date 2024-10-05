// src/components/molecules/NavItem.js
import React from 'react';
import NavButton from '../atoms/NavButton';

const NavItem = ({ label, handleClick }) => {
  return (
    <li className="flex justify-center md:justify-start">
      <NavButton text={label} onClick={handleClick} className="w-full md:w-auto" />
    </li>
  );
};

export default NavItem;
