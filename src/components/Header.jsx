import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useAuth } from '../context/AuthContext';
import { ShoppingCart } from 'lucide-react';

function Header() {
  const { cart } = useAuth();
  const itemCount = cart.length;

  return (
    <motion.header 
      className="bg-pink-100 shadow-md"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <nav className="container mx-auto px-6 py-3">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold text-pink-600">Floral Delights</Link>
          <div className="flex items-center">
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <Link to="/" className="mx-2 text-gray-600 hover:text-pink-600">Home</Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <Link to="/shop" className="mx-2 text-gray-600 hover:text-pink-600">Shop</Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <Link to="/cart" className="mx-2 text-gray-600 hover:text-pink-600 relative">
                <ShoppingCart className="w-6 h-6" />
                {itemCount > 0 && (
                  <motion.span 
                    className="absolute -top-2 -right-2 bg-pink-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 500, damping: 15 }}
                  >
                    {itemCount}
                  </motion.span>
                )}
              </Link>
            </motion.div>
          </div>
        </div>
      </nav>
    </motion.header>
  );
}

export default Header;

