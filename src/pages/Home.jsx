import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="container mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">Welcome to Floral Delights</h1>
      <div className="flex flex-col items-center">
        <p className="text-xl text-gray-600 mb-8 text-center max-w-2xl">
          Discover the beauty of nature with our exquisite collection of flowers. Perfect for any occasion or simply to brighten up your day.
        </p>
        <Link to="/shop" className="bg-pink-500 text-gray-500 px-6 py-3 rounded-full hover:bg-pink-600 transition duration-300">
          Shop Now
        </Link>
      </div>
      <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Fresh Selections</h2>
          <p className="text-gray-600">Our flowers are handpicked daily to ensure the highest quality.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Same Day Delivery</h2>
          <p className="text-gray-600">Order before 2 PM for same-day delivery in select areas.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Custom Arrangements</h2>
          <p className="text-gray-600">Create your own unique bouquet with our custom arrangement service.</p>
        </div>
      </div>
    </div>
  );
}

export default Home;


