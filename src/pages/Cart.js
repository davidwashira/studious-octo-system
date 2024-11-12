// src/pages/Cart.js
import React, { useState, useEffect, useContext } from 'react';
import { CartContext } from '../CartContext';
import PayPalButton from './PayPalButton';

const Cart = () => {
  const { cart, setCart } = useContext(CartContext);  // Assuming setCart is part of your context for updating cart
  const [cartData, setCartData] = useState(cart);

  // Load cart data from localStorage on mount
  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem('cart'));
    if (savedCart) {
      setCartData(savedCart);
    }
  }, []);

  // Save cart data to localStorage whenever it changes
  useEffect(() => {
    if (cartData.length > 0) {
      localStorage.setItem('cart', JSON.stringify(cartData));
    }
  }, [cartData]);

  // Calculate the total price of items in the cart
  const totalAmount = cartData.reduce((total, product) => total + product.price, 0).toFixed(2);

  // Handle item removal
  const removeFromCart = (productId) => {
    const updatedCart = cartData.filter(product => product.id !== productId);
    setCartData(updatedCart);
  };

  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-8 text-center">Your Cart</h1>
      {cartData.length === 0 ? (
        <p className="text-center text-lg text-gray-600">Your cart is empty.</p>
      ) : (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
            {cartData.map((product, index) => (
              <div key={index} className="border rounded-lg p-4 shadow-lg hover:shadow-xl transition duration-300">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-48 object-cover mb-4 rounded"
                />
                <h2 className="text-lg font-semibold mb-2 text-gray-800">{product.title}</h2>
                <p className="text-gray-600 mb-2">${product.price}</p>
                <button 
                  onClick={() => removeFromCart(product.id)} 
                  className="bg-red-500 text-white p-2 rounded hover:bg-red-700 transition"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>

          <div className="border-t pt-4 mt-6">
            <h2 className="text-2xl font-semibold text-gray-800">Total: ${totalAmount}</h2>
          </div>

          <div className="mt-8 text-center">
            {/* Pass totalAmount to PayPalButton */}
            <PayPalButton amount={totalAmount} />
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
