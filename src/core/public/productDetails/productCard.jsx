import React, { useState } from 'react';
import { ShoppingCart } from 'lucide-react';

const ProductCard = ({ product }) => {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div
      className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden cursor-pointer transform hover:scale-105"
    >
      {/* Product Image */}
      <div className="relative bg-gray-100 aspect-square flex items-center justify-center overflow-hidden">
        {product.isNew && (
          <span className="absolute top-2 left-2 bg-black text-white text-xs px-2 py-1 rounded">
            NEW
          </span>
        )}
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-110"
        />
      </div>

      {/* Product Info */}
      <div className="p-4">
        <p className="text-sm text-gray-500 mb-1">{product.brand || 'Generic'}</p>

        <h3 className="font-semibold text-gray-900 mb-3 line-clamp-2">
          {product.name}
        </h3>

        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="text-lg font-bold text-gray-900">₹{product.price}</span>
            {product.originalPrice && (
              <span className="text-sm text-gray-500 line-through">₹{product.originalPrice}</span>
            )}
          </div>

          {/* Cart Button with Tooltip */}
          <div
            className="relative"
            onMouseEnter={() => setShowTooltip(true)}
            onMouseLeave={() => setShowTooltip(false)}
          >
            <button className="p-2 rounded-full bg-gray-200 text-gray-600 transition-colors hover:bg-gray-300">
              <ShoppingCart className="w-5 h-5" />
            </button>
            {showTooltip && (
              <div className="absolute bottom-full mb-1 left-1/2 -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded shadow-md whitespace-nowrap z-10">
                Add to Cart
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
