import React, { useState, useEffect } from 'react';
import { Filter, DollarSign, ArrowUpDown } from 'lucide-react';
import axios from 'axios';
import Navbar from '../../../components/navbar';
import Footer from '../../../components/footer';
import ProductCard from './productCard';

const Shop = () => {
  const [showFilters, setShowFilters] = useState(false);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [priceRange, setPriceRange] = useState({ min: '', max: '' });
  const [sortOption, setSortOption] = useState('');
  const [isApplyingFilters, setIsApplyingFilters] = useState(false);



  // Fetch products on mount
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get('http://localhost:5000/api/shoes');
        setProducts(res.data);
      } catch (error) {
        console.error("Failed to fetch products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  },
    []
  );
  const clearFilters = async () => {
    setPriceRange({ min: '', max: '' });
    setSortOption('');
    setLoading(true);

    try {
      const res = await axios.get('http://localhost:5000/api/shoes');
      setProducts(res.data);
    } catch (error) {
      console.error("Failed to fetch products:", error);
    } finally {
      setLoading(false);
    }
  };
const applyFilters = async () => {
  setIsApplyingFilters(true);

  try {
    const params = new URLSearchParams();
    if (priceRange.min) params.append("minPrice", priceRange.min);
    if (priceRange.max) params.append("maxPrice", priceRange.max);
    if (sortOption) params.append("sortBy", sortOption);

    const res = await axios.get(`http://localhost:5000/api/shoes/filter?${params.toString()}`);
    setProducts(res.data);
  } catch (error) {
    console.error("Error applying filters:", error);
  } finally {
    setIsApplyingFilters(false);
    setShowFilters(false); // Close the popup after applying
  }
};




  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      {/* Hero */}
      <section className="relative h-96 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105 transition-transform duration-700"
          style={{
            backgroundImage: "linear-gradient(135deg, rgba(0,0,0,0.5), rgba(249,115,22,0.3)), url('src/assets/baki-photo/top-view-sneakers-compass-table.jpg')"
          }}
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white max-w-4xl mx-auto px-4">
              <h1 className="text-5xl md:text-7xl font-bold mb-6">Shop</h1>
            </div>
          </div>
        </div>
      </section>

      {/* Filter Bar */}
      <div className="bg-orange-50 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center space-x-2 text-gray-700 hover:text-gray-900"
            >
              <Filter className="h-5 w-5" />
              <span>Filter</span>
            </button>
            <div className="text-sm text-gray-600">
              Showing 1–{products.length} of {products.length} results
            </div>
          </div>
        </div>
      </div>

      {/* Filter */}
      {showFilters && (
        <div className="fixed inset-0 z-50 overflow-hidden">
          <div className="absolute inset-0 bg-blend-saturation bg-opacity-50" onClick={() => setShowFilters(false)} />

          {/* Popup Modal */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-md bg-white rounded-lg shadow-2xl ">
            <div className="p-6">
              {/* Header */}
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-gray-800">Filter Products</h2>
                <button
                  onClick={() => setShowFilters(false)}
                  className="p-2 hover:bg-orange-50 rounded-full transition-colors"
                >
                  <span className="text-gray-600 text-xl">×</span>
                </button>
              </div>

              {/* Price Range Filter */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                  Price Range
                </h3>
                <div className="flex space-x-3">
                  <div className="flex-1">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Min Price
                    </label>
                    <input
                      type="number"
                      placeholder="0"
                      value={priceRange.min}
                      onChange={(e) => setPriceRange({ ...priceRange, min: e.target.value })}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    />
                  </div>
                  <div className="flex-1">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Max Price
                    </label>
                    <input
                      type="number"
                      placeholder="1000"
                      value={priceRange.max}
                      onChange={(e) => setPriceRange({ ...priceRange, max: e.target.value })}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    />
                  </div>
                </div>
              </div>

              {/* Sort Options */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                  <ArrowUpDown className="h-5 w-5 mr-2 text-red-600" />
                  Sort By Price
                </h3>
                <div className="space-y-3">
                  <label className="flex items-center space-x-3 cursor-pointer">
                    <input
                      type="radio"
                      name="sort"
                      value="price-low-high"
                      checked={sortOption === 'price-low-high'}
                      onChange={(e) => setSortOption(e.target.value)}
                      className="text-orange-500 focus:ring-orange-500"
                    />
                    <span className="text-gray-700">Price: Low to High</span>
                  </label>
                  <label className="flex items-center space-x-3 cursor-pointer">
                    <input
                      type="radio"
                      name="sort"
                      value="price-high-low"
                      checked={sortOption === 'price-high-low'}
                      onChange={(e) => setSortOption(e.target.value)}
                      className="text-orange-500 focus:ring-orange-500"
                    />
                    <span className="text-gray-700">Price: High to Low</span>
                  </label>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex space-x-3">
                <button
                  onClick={applyFilters}
                  disabled={isApplyingFilters}
                  className="flex-1 bg-orange-500 hover:bg-orange-600 text-white font-medium py-3 px-6 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isApplyingFilters ? 'Applying...' : 'Apply Filters'}
                </button>
                <button
                  onClick={clearFilters}
                  className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium py-3 px-6 rounded-lg transition-colors"
                >
                  Clear All
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Products */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Products</h2>
            <div className="w-24 h-1 bg-red-600 mx-auto"></div>
          </div>

          {loading ? (
            <div className="text-center text-gray-600">Loading products...</div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {products.map((product) => (
                <ProductCard key={product._id} product={product} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Load More Button (optional feature) */}
      <div className="text-center pb-12">
        <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-medium transition-colors">
          Load More Products
        </button>
      </div>

      <Footer />
    </div>
  );
};

export default Shop;
