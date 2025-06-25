import React, { useState, useEffect } from 'react';
import { ShoppingCart, Heart, Star, ChevronLeft, ChevronRight } from 'lucide-react';
import Navbar from '../../../components/navbar';
import Footer from '../../../components/footer';
import DynamicProductSection from './DynamicProductSection';

const Home = () => {
  const [hoveredProduct, setHoveredProduct] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const galleryImages = [
    'src/assets/galleryimage/w1.png',
    'src/assets/galleryimage/w2.png',
    'src/assets/galleryimage/w3.png',
    'src/assets/galleryimage/w4.png',
    'src/assets/galleryimage/w5.png',
    'src/assets/galleryimage/w6.png',
    'src/assets/galleryimage/w7.png',
  ];

  const carouselImages = [
    'src/assets/carasol/carasol2.jpg',
    // 'src/assets/carasol/carasol3.jpg', 
    // 'src/assets/carasol/carasol4.jpg',
    'src/assets/carasol/carasol5.jpg',
    'src/assets/carasol/carasol6.jpg',
    'src/assets/carasol/carasol9.jpg',
    'src/assets/carasol/carasol8.jpg'
  ];

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval);
  }, [carouselImages.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + carouselImages.length) % carouselImages.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  // Updated products array with brand information
  const products = [
    { id: 1, name: 'Men running shoes', brand: 'Nike', price: '$299', discount: '25%', image: 'src/assets/men/nike1.png', category: 'men' },
    { id: 2, name: 'Formal canvas shoes for men', brand: 'Adidas', price: '$249.99', discount: '29%', image: 'src/assets/men/formal men1.png', category: 'men' },
    { id: 3, name: 'Formal canvas shoes for men', brand: 'Puma', price: '$249.99', discount: '29%', image: 'src/assets/men/sports men1.png', category: 'men' },
    { id: 4, name: 'Casual shoe drop for men', brand: 'Nike', price: '$299.99', discount: '25%', image: 'src/assets/men/nike2.png', category: 'men' },
    { id: 5, name: 'Sport shoes', brand: 'Adidas', price: '$199.99', discount: '33%', image: 'src/assets/women/womensandel3.png', category: 'women' },
    { id: 6, name: 'Canvas shoes', brand: 'Converse', price: '$179.99', discount: '28%', image: 'src/assets/women/womensandel1.png', category: 'women' },
    { id: 7, name: 'Running shoes', brand: 'Nike', price: '$229.99', discount: '30%', image: 'src/assets/women/women heels.png', category: 'women' },
    { id: 8, name: 'Casual sneakers', brand: 'Adidas', price: '$189.99', discount: '30%', image: 'src/assets/KID/kid 2.png', category: 'kids' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-screen overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('src/assets/top-view-sneakers-compass-table.jpg')"
          }}
        >
          {/* Overlay for better text readability */}
          <div className="absolute inset-0 bg-black/20"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
            {/* Left side - can be used for additional content if needed */}
            <div className="hidden lg:block">
              {/* This space can be used for additional elements or left empty to showcase the background */}
            </div>

            {/* Right side - Main content */}
            <div className="relative flex justify-end">
              <div className="relative bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-2xl border border-white/20 w-96 max-w-md">
                <div className="flex flex-col items-center text-center space-y-6">
                  <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                    Find Your
                    <br />
                    <span className="text-red-600">Sole Mate</span>
                    <br />
                    With Us
                  </h1>
                  <button className="bg-gray-800 text-white px-8 py-4 rounded-md text-lg font-semibold hover:bg-gray-900 transition-all duration-300 transform hover:scale-105 shadow-lg">
                    BUY NOW
                  </button>
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
              { title: 'MAN', image: 'src/assets/men.jpg' },
              { title: 'WOMEN', image: 'src/assets/women.jpg' },
              { title: 'KID', image: 'src/assets/kid.jpg' }
            ].map((category) => (
              <div key={category.title} className="group cursor-pointer">
                <div className="relative overflow-hidden rounded-2xl h-130 transform transition-all duration-300 group-hover:scale-105 group-hover:shadow-2xl">
                  <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                    style={{
                      backgroundImage: `url('${category.image}')`
                    }}
                  ></div>
                  <div className="relative h-full flex flex-col justify-end inset-0 bg-black/30">
                    <div className="p-6 text-center">
                      <h3 className="text-3xl font-bold tracking-wide text-white drop-shadow-lg group-hover:scale-110 transition-transform duration-300">
                        {category.title}
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <DynamicProductSection />


      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

            {/* Left Side - Text Content */}
            <div className="space-y-6">
              <div>
                <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                  50+ Trendy Kicks
                  <br />
                  <span className="text-red-600">You'll Love</span>
                </h2>
              </div>

              <p className="text-gray-600 text-lg leading-relaxed">
                Our designer sneakers create a list of beautiful
                premixed and trendy color themes for you to choose
                from the best collection.
              </p>

              <button className="bg-gray-900 text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-all duration-300 transform hover:scale-105 shadow-lg">
                Explore More
              </button>
            </div>

            {/* Right Side - Image Carousel */}
            <div className="relative">
              <div className="relative overflow-hidden rounded-2xl shadow-2xl">

                {/* Main Carousel Container */}
                <div className="relative h-96 bg-gradient-to-br from-orange-200 to-red-200">

                  {/* Carousel Images */}
                  <div
                    className="flex transition-transform duration-500 ease-in-out h-full"
                    style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                  >
                    {carouselImages.map((image, index) => (
                      <div key={index} className="w-full h-full flex-shrink-0 relative">
                        <div className="absolute inset-0 bg-gradient-to-br "></div>
                        <img
                          src={image}
                          alt={`Trendy shoe ${index + 1}`}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Step In Style Gallery Section ------------------------------------------------------------------------------------------- */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-gray-600 text-lg mb-2">Your steps, your story</p>
            <h2 className="text-4xl font-bold text-gray-900 mb-8">#StepInStyle</h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 auto-rows-auto">
            {/* Large square image */}
            <div className="col-span-2 row-span-2">
              <div className=" rounded-2xl overflow-hidden h-64 md:h-90 group cursor-pointer">
                <img
                  src="src/assets/galleryimage/d2.jpg"
                  alt="Style showcase"
                  className="w-full h-full object-cover  transition-transform duration-300"
                />
              </div>
            </div>

            {/* Tall rectangle */}
            <div className="col-span-1 row-span-2">
              <div className=" rounded-2xl overflow-hidden h-64 md:h-80 group cursor-pointer">
                <img
                  src="src/assets/galleryimage/w10.jpg"
                  alt="Style showcase"
                  className="w-full h-full object-cover  transition-transform duration-300"
                />
              </div>
            </div>

            {/* Regular square */}
            <div className="col-span-1 row-span-1">
              <div className=" rounded-2xl overflow-hidden h-32 md:h-40 group cursor-pointer">
                <img
                  src="src/assets/galleryimage/d1.jpg"
                  alt="Style showcase"
                  className="w-full h-full object-cover  transition-transform duration-300"
                />
              </div>
            </div>

            {/* Wide rectangle */}
            <div className="col-span-2 row-span-1">
              <div className="rounded-2xl overflow-hidden h-32 md:h-40 group cursor-pointer">
                <img
                  src="src/assets/galleryimage/d3.jpg"
                  alt="Style showcase"
                  className="w-full h-full object-cover  transition-transform duration-300"
                />
              </div>
            </div>

            {/* Another regular square */}
            <div className="col-span-1 row-span-1">
              <div className="bg-gray-200 rounded-2xl overflow-hidden h-32 md:h-40 group cursor-pointer">
                <img
                  src="src/assets/galleryimage/d5.jpg"
                  alt="Style showcase"
                  className="w-full h-full object-cover  transition-transform duration-300"
                />
              </div>
            </div>

            {/* Tall rectangle */}
            <div className="col-span-1 row-span-2">
              <div className="bg-gray-200 rounded-2xl overflow-hidden h-64 md:h-80 group cursor-pointer">
                <img
                  src="src/assets/galleryimage/d6.jpg"
                  alt="Style showcase"
                  className="w-full h-full object-cover  transition-transform duration-300"
                />
              </div>
            </div>

            {/* Square */}
            <div className="col-span-1 row-span-1">
              <div className="bg-gray-200 rounded-2xl overflow-hidden h-32 md:h-40 group cursor-pointer">
                <img
                  src="src/assets/galleryimage/d7.jpg"
                  alt="Style showcase"
                  className="w-full h-full object-cover  transition-transform duration-300"
                />
              </div>
            </div>

            {/* Wide rectangle */}
            <div className="col-span-2 row-span-1">
              <div className="bg-gray-200 rounded-2xl overflow-hidden h-32 md:h-40 group cursor-pointer">
                <img
                  src="src/assets/galleryimage/d8.jpg"
                  alt="Style showcase"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
            </div>

            {/* Another square */}
            <div className="col-span-1 row-span-1">
              <div className="bg-gray-200 rounded-2xl overflow-hidden h-32 md:h-40 group cursor-pointer">
                <img
                  src="src/assets/galleryimage/d9.jpg"
                  alt="Style showcase"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />

    </div>
  );
};

export default Home;