import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { products } from '../data/products';
import AuthModal from '../components/AuthModal';
import { useAuth } from '../context/AuthContext';

function Shop() {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const { isLoggedIn, addToCart } = useAuth();

  const handleAddToCart = (product) => {
    if (isLoggedIn) {
      addToCart(product);
    } else {
      setIsAuthModalOpen(true);
    }
  };

  const handleAuthSuccess = () => {
    console.log('Authentication successful');
  };

  return (
    <div className="container mx-auto px-6 py-8">
      <motion.h1 
        className="text-3xl font-bold text-center text-gray-800 mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Our Collection
      </motion.h1>
      <motion.div 
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {products.map((product, index) => (
          <motion.div 
            key={product.id} 
            className="bg-white rounded-lg shadow-md overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
              <p className="text-gray-600 mb-4">{product.description}</p>
              <div className="flex justify-between items-center">
                <span className="text-lg font-bold text-pink-600">${product.price.toFixed(2)}</span>
                <motion.button 
                  onClick={() => handleAddToCart(product)}
                  className="bg-pink-500 text-white px-4 py-2 rounded hover:bg-pink-600 transition duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Add to Cart
                </motion.button>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
      <AuthModal 
        isOpen={isAuthModalOpen} 
        onClose={() => setIsAuthModalOpen(false)} 
        onSuccess={handleAuthSuccess}
      />
    </div>
  );
}

export default Shop;

