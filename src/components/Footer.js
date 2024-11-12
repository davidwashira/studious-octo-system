import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-4 mt-8">
      <p className="text-center text-sm">
        <a href="/about" className="mx-2 hover:text-blue-300">About Us</a> |
        <a href="/contact" className="mx-2 hover:text-blue-300">Contact Us</a> |
        <a href="/privacy" className="mx-2 hover:text-blue-300">Privacy Policy</a>
      </p>
    </footer>
  );
};

export default Footer;
