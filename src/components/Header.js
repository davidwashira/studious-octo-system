// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-blue-600 to-purple-700 text-white p-4 shadow-lg">
      <nav className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Shoppify</h1>
        <ul className="flex space-x-6">
          <li><Link to="/" className="hover:underline">Home</Link></li>
          <li><Link to="/cart" className="hover:underline">Cart</Link></li>
          <li><Link to="/signin" className="hover:underline">Sign In</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
