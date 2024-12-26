import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="bg-pink-100 shadow-md">
      <nav className="container mx-auto px-6 py-3">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold text-pink-600">Floral Delights</Link>
          <div className="flex items-center">
            <Link to="/" className="mx-2 text-gray-600 hover:text-pink-600">Home</Link>
            <Link to="/shop" className="mx-2 text-gray-600 hover:text-pink-600">Shop</Link>
            <Link to="/cart" className="mx-2 text-gray-600 hover:text-pink-600">Cart</Link>
            <Link to="/auth" className="mx-2 text-gray-600 hover:text-pink-600">Login/Signup</Link>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;

