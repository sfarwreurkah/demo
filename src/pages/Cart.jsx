import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Cart() {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    // In a real application, you would fetch the cart items from an API or local storage
    const mockCartItems = [
      { id: 1, name: "Sunburst Bouquet", price: 39.99, quantity: 2 },
      { id: 2, name: "Romantic Rose Bunch", price: 49.99, quantity: 1 },
    ];
    setCartItems(mockCartItems);
  }, []);

  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="container mx-auto px-6 py-8">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">Your Cart</h1>
      {cartItems.length === 0 ? (
        <p className="text-center text-gray-600">Your cart is empty.</p>
      ) : (
        <div>
          {cartItems.map((item) => (
            <div key={item.id} className="flex items-center justify-between border-b py-4">
              <div>
                <h2 className="text-lg font-semibold">{item.name}</h2>
                <p className="text-gray-600">Quantity: {item.quantity}</p>
              </div>
              <p className="text-lg font-bold text-pink-600">${(item.price * item.quantity).toFixed(2)}</p>
            </div>
          ))}
          <div className="mt-8">
            <p className="text-xl font-bold text-right">Total: ${total.toFixed(2)}</p>
            <div className="mt-4 text-right">
              <Link to="/shop" className="bg-gray-200 text-gray-700 px-4 py-2 rounded mr-4 hover:bg-gray-300 transition duration-300">
                Continue Shopping
              </Link>
              <button className="bg-pink-500 text-white px-4 py-2 rounded hover:bg-pink-600 transition duration-300">
                Checkout
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;

