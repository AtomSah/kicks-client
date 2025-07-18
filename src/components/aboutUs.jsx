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
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-orange-50">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-100 flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105 transition-transform duration-700"
          style={{
            backgroundImage: "linear-gradient(135deg, rgba(0,0,0,0.5), rgba(249,115,22,0.3)), url('src/assets/baki-photo/top-view-sneakers-compass-table.jpg')"
          }}
        >
        </div>

        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-black mb-6 bg-gradient-to-r from-white to-orange-200 bg-clip-text text-transparent">
            About KICKS
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-orange-600 mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-orange-100 font-light">
            Where passion meets perfection in every step          
            </p>
        </div>


      </section>

      {/* Story Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-64 h-64 bg-orange-100/50 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-orange-50/70 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div>
                <div className="inline-flex items-center px-4 py-2 bg-orange-100 text-orange-600 rounded-full text-sm font-medium mb-4">
                  <Star className="w-4 h-4 mr-2" />
                  Our Journey
                </div>
                <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                  Our <span className="text-orange-500">Story</span>
                </h2>
              </div>

              <div className="space-y-6">
                <div className="group">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-2 h-2 bg-orange-500 rounded-full mt-3 group-hover:scale-150 transition-transform"></div>
                    <p className="text-lg text-gray-600 leading-relaxed">
                      Founded in 2020, KICKS began as a dream to revolutionize the way people experience footwear.
                      We believe that the right pair of shoes can transform not just your outfit, but your entire day.
                    </p>
                  </div>
                </div>

                <div className="group">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-2 h-2 bg-orange-500 rounded-full mt-3 group-hover:scale-150 transition-transform"></div>
                    <p className="text-lg text-gray-600 leading-relaxed">
                      What started as a small collection of carefully curated shoes has grown into a comprehensive
                      destination for footwear enthusiasts worldwide. We partner with renowned brands and emerging
                      designers to bring you the perfect blend of style, comfort, and innovation.
                    </p>
                  </div>
                </div>

                <div className="group">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-2 h-2 bg-orange-500 rounded-full mt-3 group-hover:scale-150 transition-transform"></div>
                    <p className="text-lg text-gray-600 leading-relaxed">
                      Today, KICKS serves thousands of customers globally, each step of the way guided by our
                      commitment to quality, authenticity, and exceptional customer service.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-orange-600/20 rounded-3xl transform rotate-6 group-hover:rotate-3 transition-transform duration-500"></div>
              <div className="relative aspect-square rounded-3xl overflow-hidden bg-gradient-to-br from-orange-100 to-orange-200 transform group-hover:scale-105 transition-transform duration-500">
                <img
                  src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                  alt="Shoe collection"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-orange-900/20 to-transparent"></div>
              </div>

              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-orange-500 rounded-full opacity-20 animate-pulse"></div>
              <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-orange-400 rounded-full opacity-15 animate-pulse delay-1000"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-gradient-to-br from-orange-50 via-orange-25 to-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-0 w-96 h-96 bg-orange-200/30 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-orange-100/40 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-4 py-2 bg-orange-100 text-orange-600 rounded-full text-sm font-medium mb-6">
              <Award className="w-4 h-4 mr-2" />
              Our Values
            </div>
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              What We <span className="text-orange-500">Stand For</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Our values drive everything we do, from selecting the perfect shoes to delivering exceptional customer experiences.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="group relative">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-orange-600/5 rounded-2xl transform group-hover:scale-105 transition-transform duration-300"></div>
                <div className="relative bg-white/70 backdrop-blur-sm p-8 rounded-2xl border border-orange-100/50 hover:border-orange-200 transition-all duration-300 group-hover:shadow-xl group-hover:shadow-orange-500/10">
                  <div className="flex flex-col items-center text-center">
                    <div className="mb-6 p-4 bg-gradient-to-br from-orange-100 to-orange-200 rounded-2xl group-hover:from-orange-200 group-hover:to-orange-300 transition-all duration-300 group-hover:scale-110">
                      {value.icon}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-orange-600 transition-colors">
                      {value.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">{value.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-orange-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-orange-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-4 py-2 bg-orange-500/20 text-orange-300 rounded-full text-sm font-medium mb-6">
              <Star className="w-4 h-4 mr-2" />
              Our Achievements
            </div>
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              Our <span className="text-orange-500">Impact</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">Numbers that tell our story</p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="group text-center">
                <div className="relative p-8 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-orange-500/30 transition-all duration-300 group-hover:scale-105">
                  <div className="text-5xl md:text-6xl font-black text-transparent bg-gradient-to-br from-orange-400 to-orange-600 bg-clip-text mb-4 group-hover:from-orange-300 group-hover:to-orange-500 transition-all duration-300">
                    {stat.number}
                  </div>
                  <div className="text-lg text-gray-300 font-medium group-hover:text-white transition-colors">
                    {stat.label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-orange-100/30 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center px-4 py-2 bg-orange-100 text-orange-600 rounded-full text-sm font-medium mb-8">
            <Shield className="w-4 h-4 mr-2" />
            Our Mission
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-12">
            Our <span className="text-orange-500">Mission</span>
          </h2>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-orange-600/10 rounded-3xl transform rotate-1"></div>
            <blockquote className="relative bg-white/80 backdrop-blur-sm p-12 rounded-3xl border border-orange-100 shadow-xl">
              <p className="text-2xl md:text-3xl text-gray-700 leading-relaxed font-light italic">
                "To provide every customer with premium footwear that enhances their lifestyle,
                backed by unmatched quality and service that exceeds expectations."
              </p>
            </blockquote>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-gradient-to-br from-orange-50 via-white to-orange-50 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-80 h-80 bg-orange-200/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-orange-100/30 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-4 py-2 bg-orange-100 text-orange-600 rounded-full text-sm font-medium mb-6">
              <Users className="w-4 h-4 mr-2" />
              Our Team
            </div>
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Meet Our <span className="text-orange-500">Team</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">The passionate people behind KICKS</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "Atom Sah", role: "Founder & CEO", image: "src/assets/baki-photo/atom.jpg" },
              { name: "Nirajan Mahato", role: "Head of Design", image: "src/assets/baki-photo/nirajan.jpg" },
              { name: "Manisha Saha", role: "Customer Experience", image: "src/assets/baki-photo/manisha.png" }
            ].map((member, index) => (
              <div key={index} className="group">
                <div className="relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 group-hover:scale-105">
                  <div className="relative aspect-square bg-gradient-to-br from-orange-100 to-orange-200 overflow-hidden">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-orange-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <div className="p-8 text-center">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-orange-600 transition-colors">
                      {member.name}
                    </h3>
                    <p className="text-orange-500 font-semibold text-lg">{member.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutUs;