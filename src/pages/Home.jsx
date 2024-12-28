import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronRight, Truck, RefreshCcw, Heart } from 'lucide-react';

function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[70vh] bg-cover bg-center flex items-center" style={{backgroundImage: "url('/placeholder.svg?height=700&width=1200')"}}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="container mx-auto px-6 relative z-10">
          <motion.h1 
            className="text-4xl md:text-6xl font-bold text-white mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Bloom with Floral Delights
          </motion.h1>
          <motion.p 
            className="text-xl text-white mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Discover nature's beauty in every petal
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Link to="/shop" className="bg-pink-500 text-white px-6 py-3 rounded-full hover:bg-pink-600 transition duration-300 inline-flex items-center">
              Shop Now <ChevronRight className="ml-2" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Why Choose Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard 
              icon={<Truck className="w-12 h-12 text-pink-500" />}
              title="Free Delivery"
              description="Enjoy free shipping on all orders over $50"
            />
            <FeatureCard 
              icon={<RefreshCcw className="w-12 h-12 text-pink-500" />}
              title="Fresh Guarantee"
              description="7-day freshness guarantee or your money back"
            />
            <FeatureCard 
              icon={<Heart className="w-12 h-12 text-pink-500" />}
              title="Eco-Friendly"
              description="Sustainably sourced flowers and recyclable packaging"
            />
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Featured Bouquets</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <ProductCard 
              image="/placeholder.svg?height=300&width=300"
              name="Summer Sunrise"
              price={39.99}
            />
            <ProductCard 
              image="/placeholder.svg?height=300&width=300"
              name="Lavender Dreams"
              price={44.99}
            />
            <ProductCard 
              image="/placeholder.svg?height=300&width=300"
              name="Rustic Charm"
              price={49.99}
            />
          </div>
          <div className="text-center mt-12">
            <Link to="/shop" className="bg-pink-500 text-white px-6 py-3 rounded-full hover:bg-pink-600 transition duration-300 inline-flex items-center">
              View All Bouquets <ChevronRight className="ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-pink-100">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Stay Blooming with Us</h2>
          <p className="text-center text-gray-600 mb-8">Subscribe to our newsletter for exclusive offers and floral inspiration</p>
          <form className="max-w-md mx-auto flex">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="flex-grow px-4 py-2 rounded-l-full focus:outline-none focus:ring-2 focus:ring-pink-500"
            />
            <button 
              type="submit" 
              className="bg-pink-500 text-white px-6 py-2 rounded-r-full hover:bg-pink-600 transition duration-300"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}

function FeatureCard({ icon, title, description }) {
  return (
    <motion.div 
      className="bg-white p-6 rounded-lg shadow-md text-center"
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <div className="flex justify-center mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </motion.div>
  );
}

function ProductCard({ image, name, price }) {
  return (
    <motion.div 
      className="bg-white rounded-lg shadow-md overflow-hidden"
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <img src={image} alt={name} className="w-full h-64 object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">{name}</h3>
        <p className="text-gray-600">${price.toFixed(2)}</p>
        <Link to="/shop" className="mt-4 inline-block bg-pink-500 text-white px-4 py-2 rounded hover:bg-pink-600 transition duration-300">
          View Details
        </Link>
      </div>
    </motion.div>
  );
}

export default Home;


