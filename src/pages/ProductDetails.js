// src/pages/ProductDetails.js
import React, { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { CartContext } from '../CartContext';

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [newRating, setNewRating] = useState(0);
  const [ratingSubmitted, setRatingSubmitted] = useState(false);
  const [quantity, setQuantity] = useState(1);  // Add state to store quantity
  const { addToCart } = useContext(CartContext);  // Use addToCart from CartContext

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then(res => res.json())
      .then(json => setProduct(json));
  }, [id]);

  const handleRatingSubmit = () => {
    alert(`Thank you for rating this product with ${newRating} stars!`);
    setRatingSubmitted(true);
  };

  const handleAddToCart = () => {
    // Add the product with the specified quantity to the cart
    const productWithQuantity = { ...product, quantity };
    addToCart(productWithQuantity);
    alert(`${product.title} (Quantity: ${quantity}) has been added to the cart!`);
  };

  if (!product) return <div>Loading...</div>;

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="flex flex-col md:flex-row">
        <img src={product.image} alt={product.title} className="w-full md:w-1/2 h-auto object-cover rounded-lg mb-6 md:mb-0" />
        <div className="md:ml-8">
          <h1 className="text-3xl font-bold mb-4">{product.title}</h1>
          <p className="text-gray-700 mb-2">{product.description}</p>
          <p className="text-lg font-semibold text-green-600 mb-4">${product.price}</p>
          <p className="mb-4">Category: <span className="italic">{product.category}</span></p>
          <p className="mb-4">Rating: {product.rating.rate} / 5 ({product.rating.count} reviews)</p>

          {/* Quantity input */}
          <div className="mb-4">
            <label htmlFor="quantity" className="font-semibold">Quantity:</label>
            <input
              id="quantity"
              type="number"
              value={quantity}
              onChange={(e) => setQuantity(Math.max(1, Number(e.target.value)))}
              min="1"
              className="border rounded-md p-2 w-20 mt-2"
            />
          </div>

          <div className="mt-6">
            <h3 className="font-bold mb-2">Rate this product:</h3>
            <select
              value={newRating}
              onChange={(e) => setNewRating(Number(e.target.value))}
              className="border rounded-md p-2 mb-4"
              disabled={ratingSubmitted}
            >
              <option value={0}>Select rating</option>
              {[1, 2, 3, 4, 5].map(value => (
                <option key={value} value={value}>{value} Star{value > 1 ? 's' : ''}</option>
              ))}
            </select>
            <button
              onClick={handleRatingSubmit}
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
              disabled={ratingSubmitted || newRating === 0}
            >
              {ratingSubmitted ? "Thank you for your rating!" : "Submit Rating"}
            </button>
          </div>

          <button
            onClick={handleAddToCart}
            className="mt-4 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
