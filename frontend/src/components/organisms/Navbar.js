// src/components/organisms/Navbar.js
import React, { useState } from 'react';
import NavItem from '../molecules/NavItem';
import { useNavigate } from 'react-router-dom';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'; // Heroicons v2 imports

const Navbar = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-10">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <div className="text-xl font-bold text-blue-500 cursor-pointer" onClick={() => navigate('/')}>
          TallyQuote
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 items-center">
          <NavItem label="Home" handleClick={() => navigate('/')} />
          <NavItem label="Quotes" handleClick={() => navigate('/quotes')} />
          <NavItem label="Add Service" handleClick={() => navigate('/add-service')} />
          <NavItem label="Add Client" handleClick={() => navigate('/add-client')} />
        </ul>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? (
              <XMarkIcon className="h-6 w-6 text-gray-800" />  
            ) : (
              <Bars3Icon className="h-6 w-6 text-gray-800" />  
            )}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <ul className="md:hidden bg-white space-y-2 py-4">
          <NavItem label="Home" handleClick={() => { navigate('/'); setMenuOpen(false); }} />
          <NavItem label="Quotes" handleClick={() => { navigate('/quotes'); setMenuOpen(false); }} />
          <NavItem label="Add Service" handleClick={() => { navigate('/add-service'); setMenuOpen(false); }} />
          <NavItem label="Add Client" handleClick={() => { navigate('/add-client'); setMenuOpen(false); }} />
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
