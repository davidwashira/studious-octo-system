// src/pages/Cart.js
import React, { useContext } from 'react';
import { CartContext } from '../CartContext';
import PayPalButton from './PayPalButton';

const Cart = () => {
  const { cart } = useContext(CartContext);

  // Calculate the total price of items in the cart
  const totalAmount = cart.reduce((total, product) => total + product.price, 0).toFixed(2);

  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-8">Your Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
            {cart.map((product, index) => (
              <div key={index} className="border rounded-lg p-4 shadow-md">
                <img src={product.image} alt={product.title} className="w-full h-48 object-cover mb-4 rounded" />
                <h2 className="text-lg font-semibold mb-2">{product.title}</h2>
                <p className="text-gray-700 mb-2">${product.price}</p>
              </div>
            ))}
          </div>

          <div className="border-t pt-4">
            <h2 className="text-2xl font-semibold">Total: ${totalAmount}</h2>
          </div>

          <div className="mt-6">
            {/* Pass totalAmount to PayPalButton */}
            <PayPalButton amount={totalAmount} />
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
