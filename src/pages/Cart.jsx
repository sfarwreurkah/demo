import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import AuthModal from '../components/AuthModal';
import { useAuth } from '../context/AuthContext';
import { Plus, Minus, Trash2 } from 'lucide-react';

function Cart() {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const { isLoggedIn, cart, removeFromCart, updateQuantity } = useAuth();

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleCheckout = () => {
    if (isLoggedIn) {
      console.log('Proceeding to checkout');
    } else {
      setIsAuthModalOpen(true);
    }
  };

  const handleAuthSuccess = () => {
    console.log('Authentication successful, proceeding to checkout');
  };

  return (
    <div className="container mx-auto px-6 py-8">
      <motion.h1 
        className="text-3xl font-bold text-center text-gray-800 mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Your Cart
      </motion.h1>
      {cart.length === 0 ? (
        <motion.p 
          className="text-center text-gray-600"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Your cart is empty.
        </motion.p>
      ) : (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {cart.map((item, index) => (
            <motion.div 
              key={item.id} 
              className="flex items-center justify-between border-b py-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="flex items-center">
                <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded mr-4" />
                <div>
                  <h2 className="text-lg font-semibold">{item.name}</h2>
                  <p className="text-gray-600">${item.price.toFixed(2)}</p>
                </div>
              </div>
              <div className="flex items-center">
                <motion.button 
                  onClick={() => updateQuantity(item.id, item.quantity - 1)}
                  className="text-gray-500 hover:text-pink-500 transition duration-300"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Minus className="w-5 h-5" />
                </motion.button>
                <span className="mx-2 w-8 text-center">{item.quantity}</span>
                <motion.button 
                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                  className="text-gray-500 hover:text-pink-500 transition duration-300"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Plus className="w-5 h-5" />
                </motion.button>
                <motion.button 
                  onClick={() => removeFromCart(item.id)}
                  className="ml-4 text-gray-500 hover:text-pink-500 transition duration-300"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Trash2 className="w-5 h-5" />
                </motion.button>
              </div>
              <p className="text-lg font-bold text-pink-600">${(item.price * item.quantity).toFixed(2)}</p>
            </motion.div>
          ))}
          <motion.div 
            className="mt-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <p className="text-xl font-bold text-right">Total: ${total.toFixed(2)}</p>
            <div className="mt-4 text-right">
              <Link to="/shop" className="bg-gray-200 text-gray-700 px-4 py-2 rounded mr-4 hover:bg-gray-300 transition duration-300">
                Continue Shopping
              </Link>
              <motion.button 
                onClick={handleCheckout}
                className="bg-pink-500 text-white px-4 py-2 rounded hover:bg-pink-600 transition duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Checkout
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      )}
      <AuthModal 
        isOpen={isAuthModalOpen} 
        onClose={() => setIsAuthModalOpen(false)} 
        onSuccess={handleAuthSuccess}
      />
    </div>
  );
}

export default Cart;

