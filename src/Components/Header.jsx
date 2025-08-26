// Header.jsx
import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="relative bg-gradient-to-r from-blue-600 to-green-600 shadow-md text-white overflow-hidden">
      {/* Bubbles */}
        <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 w-48 h-48 bg-blue-1000/30 rounded-full blur-2xl animate-ping"></div>
        <div className="absolute top-10 right-10 w-40 h-40 bg-red-300/30 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-0 left-1/2 w-52 h-52 bg-green-300/30 rounded-full blur-2xl animate-ping"></div>
      </div>

      <div className="container mx-auto px-4 py-4 flex items-center justify-between relative z-10">
        <Link to="/" className="flex items-center gap-2">
          <img src="/Logo.jpg" alt="Amora Help Foundation Logo" className="h-22 w-22 rounded-full" />
          <h1 className="text-lg  font-semibold">Amora Help Foundation</h1>
        </Link>

        <div className="hidden md:flex space-x-6">
          <NavLink to="/" className={({ isActive }) => isActive ? 'text-white font-bold underline' : 'text-white hover:underline'}>Home</NavLink>
          <NavLink to="/about" className={({ isActive }) => isActive ? 'text-white font-bold underline' : 'text-white hover:underline'}>About</NavLink>
          <NavLink to="/campaigns" className={({ isActive }) => isActive ? 'text-white font-bold underline' : 'text-white hover:underline'}>Campaigns</NavLink>
          <NavLink to="/donate" className={({ isActive }) => isActive ? 'text-white font-bold underline' : 'text-white hover:underline'}>Donate</NavLink>
          <NavLink to="/contact" className={({ isActive }) => isActive ? 'text-white font-bold underline' : 'text-white hover:underline'}>Contact</NavLink>
        </div>

        {/* Mobile menu toggle */}
        <button className="md:hidden z-20" onClick={() => setIsOpen(!isOpen)}>
          <div className="space-y-1">
            <span className="block w-6 h-0.5 bg-white"></span>
            <span className="block w-6 h-0.5 bg-white"></span>
            <span className="block w-6 h-0.5 bg-white"></span>
          </div>
        </button>
      </div>

      {/* Mobile nav */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2 bg-gradient-to-b from-blue-600 to-green-600 z-10 relative">
          <NavLink to="/" onClick={() => setIsOpen(false)} className={({ isActive }) => isActive ? 'block text-white font-bold underline' : 'block text-white hover:underline'}>Home</NavLink>
          <NavLink to="/about" onClick={() => setIsOpen(false)} className={({ isActive }) => isActive ? 'block text-white font-bold underline' : 'block text-white hover:underline'}>About</NavLink>
          <NavLink to="/campaigns" onClick={() => setIsOpen(false)} className={({ isActive }) => isActive ? 'block text-white font-bold underline' : 'block text-white hover:underline'}>Campaigns</NavLink>
          <NavLink to="/donate" onClick={() => setIsOpen(false)} className={({ isActive }) => isActive ? 'block text-white font-bold underline' : 'block text-white hover:underline'}>Donate</NavLink>
          <NavLink to="/contact" onClick={() => setIsOpen(false)} className={({ isActive }) => isActive ? 'block text-white font-bold underline' : 'block text-white hover:underline'}>Contact</NavLink>
        </div>
      )}
    </header>
  );
};

export default Header;


