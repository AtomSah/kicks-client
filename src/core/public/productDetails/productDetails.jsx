import React, { useState } from 'react';
import { Filter } from 'lucide-react';
import Navbar from '../../../components/navbar';
import ProductCard from './productCard';
import Footer from '../../../components/footer';

const Shop = () => {
  const [showFilters, setShowFilters] = useState(false);

  const products = [
    {
      id: 1,
      name: "Pointed canvas",
      brand: "Nike",
      price: "$2499",
      originalPrice: "$3499",
      image: "src/assets/men/formal men1.png",
      isNew: true
    },
    {
      id: 2,
      name: "Formal canvas shoes for men",
      brand: "Adidas",
      price: "$2499",
      originalPrice: "$3499",
      image: "src/assets/women/women sandel1.png",
      isNew: true
    },
    {
      id: 3,
      name: "Slick running shoes",
      brand: "Puma",
      price: "$3199",
      image: "src/assets/KID/kid boots.png",
      isNew: true
    },
    {
      id: 4,
      name: "formal shoe",
      brand: "Nike",
      price: "$2499",
      originalPrice: "$3499",
      image: "src/assets/men/formal men 2.png",
      isNew: true
    },
    {
      id: 5,
      name: "Sport shoes",
      brand: "Adidas",
      price: "$1999",
      discount: "33%",
      image: "src/assets/women/women heels.png",
      isNew: false
    },
    {
      id: 6,
      name: "Canvas shoes",
      brand: "Converse",
      price: "$1799",
      discount: "28%",
      image: "src/assets/KID/kid 5.png",
      isNew: true
    },
    {
      id: 7,
      name: "Running shoes",
      brand: "Nike",
      price: "$2299",
      discount: "30%",
      image: "src/assets/women/women sandel1.png",
      isNew: false
    },
    {
      id: 8,
      name: "Casual sneakers",
      brand: "Adidas",
      price: "$1899",
      discount: "30%",
      image: "src/assets/men/sports men1.png",
      isNew: true
    },
    {
      id: 9,
      name: "Casual sneakers",
      brand: "Adidas",
      price: "$1899",
      discount: "30%",
      image: "src/assets/KID/kid 6.png",
      isNew: true
    },
    {
      id: 10,
      name: "girls heel  ",
      brand: "Adidas",
      price: "$1899",
      discount: "30%",
      image: "src/assets/women/women sandel3.png",
      isNew: true
    },
    {
      id: 11,
      name: "Casual sneakers",
      brand: "Adidas",
      price: "$1899",
      discount: "30%",
      image: "src/assets/KID/kid 7.png",
      isNew: true
    },
    {
      id: 12,
      name: "sneakers",
      brand: "nike",
      price: "$1899",
      discount: "30%",
      image: "src/assets/men/nike1.png",
      isNew: true
    },
    {
      id: 13,
      name: "black heel",
      brand: "Adidas",
      price: "$1899",
      discount: "30%",
      image: "src/assets/women/women sandel4.png",
      isNew: true
    },
    {
      id: 14,
      name: "sports",
      brand: "Adidas",
      price: "$1899",
      discount: "30%",
      image: "src/assets/men/sports men2.png",
      isNew: true
    },
    {
      id: 15,
      name: "Casual sneakers",
      brand: "Adidas",
      price: "$1899",
      discount: "30%",
      image: "src/assets/women/women shoe1.png",
      isNew: true
    },
    {
      id: 16,
      name: "Casual sneakers",
      brand: "Adidas",
      price: "$1899",
      discount: "30%",
      image: "src/assets/KID/kid 8.png",
      isNew: true
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-64 md:h-80 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('src/assets/top-view-sneakers-compass-table.jpg')"
          }}
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white">
              <h1 className="text-4xl md:text-6xl font-bold mb-4">Shop</h1>
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

      {/* Product Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Products</h2>
            <div className="w-24 h-1 bg-red-600 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Load More */}
      <div className="text-center pb-12">
        <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-medium transition-colors">
          Load More Products
        </button>
      </div>

      <Footer/>
    </div>
  );
};

export default Shop;
