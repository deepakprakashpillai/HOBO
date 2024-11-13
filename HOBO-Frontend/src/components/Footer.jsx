import React from 'react';

export default function Footer() {
  return (
    <div className="relative h-32 w-screen overflow-hidden">
      <img
        src="https://picsum.photos/1050/128"
        alt="Footer Background"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 flex flex-col justify-center items-center bg-blue-400 bg-opacity-50">
        <h2 className="text-white text-2xl font-bold">Book Your Dream Stay</h2>
        <p className="text-white text-sm">Explore the best hotels at unbeatable prices.</p>
        <div className="flex space-x-4 mt-2">
          <a href="#about" className="text-white hover:text-yellow-300">About Us</a>
          <a href="#contact" className="text-white hover:text-yellow-300">Contact</a>
          <a href="#terms" className="text-white hover:text-yellow-300">Terms of Service</a>
        </div>
      </div>
    </div>
  );
}

