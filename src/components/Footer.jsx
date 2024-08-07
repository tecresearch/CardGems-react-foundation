// components/Footer.js

import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="bg-gray-800 p-4 mt-8">
      <div className="container mx-auto text-center text-white">
        <div className="flex justify-center mb-4">
          <Link to="/" className="px-4 hover:underline">Home</Link>
          <Link to="/about" className="px-4 hover:underline">About</Link>
          <Link to="/products" className="px-4 hover:underline">Products</Link>
        </div>
        <p className="text-sm text-gray-400">
          © {new Date().getFullYear()} Your Company. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
