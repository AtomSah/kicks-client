import { Heart, Award, Truck, Shield, Users, Star } from 'lucide-react';
import Navbar from './navbar';
import Footer from './footer';

const AboutUs = () => {
  const values = [
    {
      icon: <Heart className="h-8 w-8 text-orange-500" />,
      title: "Passion for Footwear",
      description: "We're passionate about bringing you the finest collection of shoes that combine style, comfort, and quality."
    },
    {
      icon: <Award className="h-8 w-8 text-orange-500" />,
      title: "Premium Quality",
      description: "Every pair of shoes in our collection is carefully selected for superior craftsmanship and durability."
    },
    {
      icon: <Users className="h-8 w-8 text-orange-500" />,
      title: "Customer First",
      description: "Your satisfaction is our priority. We're committed to providing exceptional service and support."
    },
    {
      icon: <Truck className="h-8 w-8 text-orange-500" />,
      title: "Fast Delivery",
      description: "Quick and reliable shipping to get your favorite shoes to your doorstep as soon as possible."
    }
  ];

  const stats = [
    { number: "50K+", label: "Happy Customers" },
    { number: "500+", label: "Shoe Styles" },
    { number: "15+", label: "Premium Brands" },
    { number: "99%", label: "Satisfaction Rate" }
  ];

  return (
    <div className="min-h-screen bg-orange-50">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-96 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url('src/assets/baki-photo/top-view-sneakers-compass-table.jpg')"
          }}
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white max-w-4xl mx-auto px-4">
              <h1 className="text-5xl md:text-7xl font-bold mb-6">About KICKS</h1>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
              <p className="text-lg text-gray-600 mb-6">
                Founded in 2020, KICKS began as a dream to revolutionize the way people experience footwear. 
                We believe that the right pair of shoes can transform not just your outfit, but your entire day.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                What started as a small collection of carefully curated shoes has grown into a comprehensive 
                destination for footwear enthusiasts worldwide. We partner with renowned brands and emerging 
                designers to bring you the perfect blend of style, comfort, and innovation.
              </p>
              <p className="text-lg text-gray-600">
                Today, KICKS serves thousands of customers globally, each step of the way guided by our 
                commitment to quality, authenticity, and exceptional customer service.
              </p>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-orange-100 to-orange-200">
                <img 
                  src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                  alt="Shoe collection"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-orange-500 rounded-full opacity-20"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-orange-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What We Stand For</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our values drive everything we do, from selecting the perfect shoes to delivering exceptional customer experiences.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="flex flex-col items-center text-center">
                  <div className="mb-4 p-3 bg-orange-100 rounded-full">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Our Impact</h2>
            <p className="text-xl text-gray-300">Numbers that tell our story</p>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-amber-700 mb-2">{stat.number}</div>
                <div className="text-lg text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-8">Our Mission</h2>
          <p className="text-2xl text-gray-600 leading-relaxed mb-8">
            "To provide every customer with premium footwear that enhances their lifestyle, 
            backed by unmatched quality and service that exceeds expectations."
          </p>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-orange-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
            <p className="text-xl text-gray-600">The passionate people behind KICKS</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "Atom Sah", role: "Founder & CEO", image: "src/assets/atom.jpg" },
              { name: "Nirajan Mahato", role: "Head of Design", image: "src/assets/nirajan.jpg" },
              { name: "Manisha Saha", role: "Customer Experience", image: "src/assets/manisha.png" }
            ].map((member, index) => (
              <div key={index} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="aspect-square bg-gradient-to-br from-orange-100 to-orange-200">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{member.name}</h3>
                  <p className="text-orange-500 font-medium">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer/>


    </div>
  );
};

export default AboutUs;