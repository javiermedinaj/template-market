import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-black text-xl font-bold">
          Market™
        </div>
        <div className="hidden md:flex space-x-4">
          <Link to="/" className="text-black px-3 py-2 rounded-md text-sm font-medium">
            Shop
          </Link>
          <Link to="/collections" className="text-black px-3 py-2 rounded-md text-sm font-medium">
            Otras colecciones
          </Link>
          <Link to="/faqs" className="text-black px-3 py-2 rounded-md text-sm font-medium">
            FAQs
          </Link>
          <Link to="/stores" className="text-black px-3 py-2 rounded-md text-sm font-medium">
            Stores
          </Link>
          <Link to="/search" className="text-black px-3 py-2 rounded-md text-sm font-medium">
            Buscar
          </Link>
          <Link to="/cart" className="text-black px-3 py-2 rounded-md text-sm font-medium">
            Carrito
          </Link>
        </div>
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-black focus:outline-none"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <Link to="/" className="block text-black px-3 py-2 rounded-md text-sm font-medium">
            Shop
          </Link>
          <Link to="/collections" className="block text-black px-3 py-2 rounded-md text-sm font-medium">
            Otras colecciones
          </Link>
          <Link to="/faqs" className="block text-black px-3 py-2 rounded-md text-sm font-medium">
            FAQs
          </Link>
          <Link to="/stores" className="block text-black px-3 py-2 rounded-md text-sm font-medium">
            Stores
          </Link>
          <Link to="/search" className="block text-black px-3 py-2 rounded-md text-sm font-medium">
            Buscar
          </Link>
          <Link to="/cart" className="block text-black px-3 py-2 rounded-md text-sm font-medium">
            Carrito
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
