import React, { useState } from 'react';
import { ShoppingCart, Heart, Star } from 'lucide-react';
import Navbar from '../../../components/navbar';

const Home = () => {
  const [hoveredProduct, setHoveredProduct] = useState(null);

  const products = [
    { id: 1, name: 'Men running shoes', price: '$299', originalPrice: '$399', discount: '25%', image: '/api/placeholder/200/200', category: 'men' },
    { id: 2, name: 'Formal canvas shoes for men', price: '$249.99', originalPrice: '$349.99', discount: '29%', image: '/api/placeholder/200/200', category: 'men' },
    { id: 3, name: 'Formal canvas shoes for men', price: '$249.99', originalPrice: '$349.99', discount: '29%', image: '/api/placeholder/200/200', category: 'men' },
    { id: 4, name: 'Casual shoe drop for men', price: '$299.99', originalPrice: '$399.99', discount: '25%', image: '/api/placeholder/200/200', category: 'men' },
    { id: 5, name: 'Sport shoes', price: '$199.99', originalPrice: '$299.99', discount: '33%', image: '/api/placeholder/200/200', category: 'women' },
    { id: 6, name: 'Canvas shoes', price: '$179.99', originalPrice: '$249.99', discount: '28%', image: '/api/placeholder/200/200', category: 'women' },
    { id: 7, name: 'Running shoes', price: '$229.99', originalPrice: '$329.99', discount: '30%', image: '/api/placeholder/200/200', category: 'women' },
    { id: 8, name: 'Casual sneakers', price: '$189.99', originalPrice: '$269.99', discount: '30%', image: '/api/placeholder/200/200', category: 'kids' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-amber-50 to-orange-100 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Find Your
                <br />
                <span className="text-red-600">Sole Mate</span>
                <br />
                With Us
              </h1>
              <button className="bg-gray-800 text-white px-8 py-4 rounded-md text-lg font-semibold hover:bg-gray-900 transition-colors transform hover:scale-105">
                Buy Now
              </button>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-red-400 to-pink-400 rounded-full blur-3xl opacity-20 animate-pulse"></div>
              <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-2xl">
                <div className="w-80 h-80 mx-auto bg-gradient-to-br from-red-500 to-red-700 rounded-full flex items-center justify-center shadow-2xl">
                  <div className="text-white text-8xl">👟</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Category Cards */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'MAN', image: '👨', bg: 'from-blue-500 to-blue-700' },
              { title: 'WOMEN', image: '👩', bg: 'from-pink-500 to-pink-700' },
              { title: 'KID', image: '🧒', bg: 'from-green-500 to-green-700' }
            ].map((category) => (
              <div key={category.title} className="group cursor-pointer">
                <div className={`relative overflow-hidden rounded-2xl bg-gradient-to-br ${category.bg} h-64 transform transition-all duration-300 group-hover:scale-105 group-hover:shadow-2xl`}>
                  <div className="absolute inset-0 bg-black/20"></div>
                  <div className="relative h-full flex flex-col items-center justify-center text-white">
                    <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">
                      {category.image}
                    </div>
                    <h3 className="text-2xl font-bold tracking-wide">{category.title}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Products</h2>
            <div className="w-24 h-1 bg-red-600 mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product) => (
              <div 
                key={product.id}
                className="bg-white rounded-2xl shadow-lg overflow-hidden group cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
                onMouseEnter={() => setHoveredProduct(product.id)}
                onMouseLeave={() => setHoveredProduct(null)}
              >
                <div className="relative">
                  <div className="bg-gray-100 h-48 flex items-center justify-center">
                    <div className="text-6xl">👟</div>
                  </div>
                  <div className="absolute top-4 left-4 bg-red-600 text-white px-2 py-1 rounded-md text-sm font-semibold">
                    -{product.discount}
                  </div>
                  <div className={`absolute top-4 right-4 transform transition-all duration-300 ${hoveredProduct === product.id ? 'scale-110' : 'scale-100'}`}>
                    <Heart className="w-6 h-6 text-gray-400 hover:text-red-500 cursor-pointer" />
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2">{product.name}</h3>
                  <div className="flex items-center mb-3">
                    {[1,2,3,4,5].map((star) => (
                      <Star key={star} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                    <span className="text-gray-500 text-sm ml-2">(4.8)</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <span className="text-lg font-bold text-gray-900">{product.price}</span>
                      <span className="text-sm text-gray-500 line-through">{product.originalPrice}</span>
                    </div>
                    <button className={`p-2 rounded-full transition-all duration-300 ${hoveredProduct === product.id ? 'bg-red-600 text-white scale-110' : 'bg-gray-100 text-gray-600'}`}>
                      <ShoppingCart className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="text-3xl font-bold mb-4">👟 Kicks</div>
            <p className="text-gray-400 mb-8">Find Your Perfect Pair</p>
            <div className="flex justify-center space-x-8">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">About</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Contact</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Terms</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;