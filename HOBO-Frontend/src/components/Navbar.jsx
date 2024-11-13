import React from 'react';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import { useNavigate } from 'react-router';

export default function Navbar() {
  const [search, setSearch] = useState('');
  const navigate = useNavigate();

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      navigate(`/search/${search}`);
    }
  };
  return (
    <>
      <div className="bg-blue-500 rounded-xl h-16 mx-24 px-10 flex items-center w-4/5 grid grid-cols-5 text-sm shadow-lg fixed z-50">
        <ul className="flex list-none gap-5 col-span-2 text-xs text-white">
          <NavLink to='/home' className={({ isActive }) => isActive ? 'text-white font-bold' : 'text-gray-300'}>
            <li className="hover:text-gray-300 cursor-pointer">Home</li>
          </NavLink>
  
          <NavLink to='/hotels'>
            <li className="hover:text-gray-300 cursor-pointer">Hotels</li>
          </NavLink>
        </ul>

        <p className="col-start-3 text-center text-white font-bold text-lg">Logo</p>
        <NavLink to='/' className={({ isActive }) => isActive ? 'text-white font-bold' : 'text-gray-300'}>
            <li className="hover:text-gray-300 cursor-pointer">Logout</li>
          </NavLink>


        {/* Search Bar - now the last element in the navbar */}
        <div className="flex justify-end items-center">
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Search..."
              className="w-64 h-10 rounded-lg text-sm px-4 focus:outline-none focus:ring-2 focus:ring-white transition duration-300"
            />
          </div>
      </div>
    </>
  );
}
