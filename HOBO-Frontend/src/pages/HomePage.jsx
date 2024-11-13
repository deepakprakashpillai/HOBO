import React from 'react';
import Navbar from '../components/Navbar';
import { useState } from 'react';
import { useNavigate } from 'react-router';
import hotelBg from '../assets/images/hotel-bg.jpg';
import MembershipPage from './MembershipPage';
import PopularPage from './PopularPage';
import Footer from '../components/Footer';

export default function HomePage() {
  const [search, setSearch] = useState('');
  const navigate = useNavigate();

  const handleClick = () => {
      navigate(`/search/${search}`);

  };
  return (
    <>
      <div className="px-10 py-5">
        <Navbar />
        <div
          className="main-container bg-cyan-500 mt-20 rounded-xl px-20 relative overflow-hidden"
          style={{
            backgroundImage: `url(${hotelBg})`,
            height: '80vh',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center center',
            backgroundSize: 'cover',
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-40"></div> {/* Overlay for better text contrast */}
          <p
            className="relative z-10 text-8xl mr-12 ml-4 font-mono font-black text-transparent bg-clip-text bg-white mt-5"
            style={{ WebkitTextStroke: '1px white' }}
          >
            DISCOVER YOUR DREAM HOTELS AT HOBO
          </p>
          <form className="h-24 bg-white mt-10 rounded-lg grid grid-cols-4 gap-6 items-center px-10 shadow-lg relative z-10">
            <div className="flex flex-col">
              <label
                htmlFor="destination"
                className="mb-1 font-semibold text-gray-700"
              >
                Enter destination
              </label>
              <input
                type="text"
                name="destination"
                id="destination"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="border-2 border-gray-300 rounded-lg p-2 focus:outline-none focus:border-blue-500"
                placeholder="e.g., New York"
              />
            </div>
            <div className="flex flex-col">
              <label
                htmlFor="checkin"
                className="mb-1 font-semibold text-gray-700"
              >
                Check-in Date
              </label>
              <input
                type="date"
                name="checkin"
                id="checkin"
                className="border-2 border-gray-300 rounded-lg p-2 focus:outline-none focus:border-blue-500"
              />
            </div>
            <div className="flex flex-col">
              <label
                htmlFor="checkout"
                className="mb-1 font-semibold text-gray-700"
              >
                Check-out Date
              </label>
              <input
                type="date"
                name="checkout"
                id="checkout"
                className="border-2 border-gray-300 rounded-lg p-2 focus:outline-none focus:border-blue-500"
              />
            </div>
            <input
              type="submit"
              value="Submit"
              onClick={handleClick}
              className="bg-blue-400 text-white rounded-xl h-10 hover:bg-blue-500 transition duration-200 mt-7 cursor-pointer"
            />
          </form>
        </div>
      </div>
      <div id="membership">
        <MembershipPage/>
      </div>
      <div id="popular">
        <PopularPage/>
      </div>
      <div id="about-us">
      <Footer/>
      </div>
      
    </>
  );
}
