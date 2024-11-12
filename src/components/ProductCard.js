// src/components/ProductCard.js
import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
  return (
    <div className="border rounded-lg p-4 shadow-md">
      <img src={product.image} alt={product.title} className="w-full h-48 object-cover mb-4 rounded" />
      <h2 className="text-lg font-semibold mb-2">{product.title}</h2>
      <p className="text-gray-700 mb-2">${product.price}</p>
      <Link to={`/product/${product.id}`} className="text-blue-500 hover:underline">
        View Details
      </Link>
    </div>
  );
};

export default ProductCard;
