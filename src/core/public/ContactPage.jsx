import { Phone, Mail, MapPin, Clock, Send, MessageCircle } from 'lucide-react';
import { useState } from 'react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Phone",
      info: "+1 (555) 123-4567",
      subInfo: "Mon-Fri 9AM-6PM"
    },
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email",
      info: "hello@kicks.com",
      subInfo: "We reply within 24hrs"
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Address",
      info: "123 Shoe Street, Fashion District",
      subInfo: "New York, NY 10001"
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Hours",
      info: "Mon-Fri: 9AM-6PM",
      subInfo: "Sat-Sun: 10AM-4PM"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-orange-50">
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-orange-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-orange-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center px-4 py-2 bg-orange-100 text-orange-600 rounded-full text-sm font-medium mb-6">
            <MessageCircle className="w-4 h-4 mr-2" />
            Get in Touch
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Contact <span className="text-orange-500">KICKS</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Have questions about our shoes or need help with your order? We're here to help!
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactInfo.map((item, index) => (
              <div key={index} className="group">
                <div className="bg-white/70 backdrop-blur-sm p-6 rounded-2xl border border-orange-100/50 hover:border-orange-200 transition-all duration-300 group-hover:shadow-xl group-hover:shadow-orange-500/10 group-hover:scale-105">
                  <div className="flex flex-col items-center text-center">
                    <div className="mb-4 p-3 bg-gradient-to-br from-orange-100 to-orange-200 rounded-xl text-orange-600 group-hover:from-orange-200 group-hover:to-orange-300 transition-all duration-300">
                      {item.icon}
                    </div>
                    <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-gray-700 font-medium">{item.info}</p>
                    <p className="text-sm text-gray-500 mt-1">{item.subInfo}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-16 bg-white relative overflow-hidden">
              
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Map Section */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Find Our Store</h2>
                <p className="text-gray-600">Visit us at our flagship store in the heart of Kathmandu.</p>
              </div>
              
              <div className="relative bg-white rounded-3xl overflow-hidden shadow-xl border border-orange-100">
                <div className="aspect-video bg-gradient-to-br from-orange-100 to-orange-200 relative overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.6948863295!2d85.31634331506155!3d27.700769882791396!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb190a74aa1f23%3A0x74ebef82ad0e5c15!2sThamel%2C%20Kathmandu%2044600%2C%20Nepal!5e0!3m2!1sen!2s!4v1642764832000!5m2!1sen!2s"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="absolute inset-0"
                  ></iframe>
                </div>
                
                <div className="p-8">
                  <div className="flex items-center mb-4">
                    <MapPin className="w-6 h-6 text-orange-500 mr-3" />
                    <h3 className="text-xl font-bold text-gray-900">KICKS Store Location</h3>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <MapPin className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-gray-900">Thamel, Kathmandu</p>
                        <p className="text-gray-600">Near Kathmandu Guest House, Thamel Marg</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Clock className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-gray-900">Store Hours</p>
                        <p className="text-gray-600">Mon-Sat: 10AM-8PM, Sun: 12PM-6PM</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Phone className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-gray-900">Call Us</p>
                        <p className="text-gray-600">+977-1-4700000</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-6 pt-6 border-t border-gray-200">
                    <p className="text-sm text-gray-600 mb-4">
                      Located in the bustling heart of Thamel, our store offers the perfect shopping experience with easy access to parking and nearby attractions.
                    </p>
                    <button className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 py-3 rounded-xl font-semibold hover:from-orange-600 hover:to-orange-700 transform hover:scale-105 transition-all duration-300 flex items-center space-x-2">
                      <MapPin className="w-5 h-5" />
                      <span>Get Directions</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Map/Image */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-orange-600/10 rounded-3xl transform rotate-3 group-hover:rotate-1 transition-transform duration-500"></div>
              <div className="relative aspect-square rounded-3xl overflow-hidden bg-gradient-to-br from-orange-100 to-orange-200 transform group-hover:scale-105 transition-transform duration-500">
                <img 
                  src="https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                  alt="Store location"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-orange-900/20 to-transparent"></div>
                <div className="absolute bottom-6 left-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">Visit Our Store</h3>
                  <p className="text-orange-100">Experience our shoes in person</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gradient-to-br from-orange-50 via-white to-orange-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Frequently Asked <span className="text-orange-500">Questions</span>
            </h2>
            <p className="text-gray-600">Quick answers to common questions</p>
          </div>
          
          <div className="space-y-4">
            {[
              { q: "What's your return policy?", a: "We offer 30-day returns for unworn shoes with original packaging." },
              { q: "Do you offer international shipping?", a: "Yes, we ship worldwide with tracking and insurance included." },
              { q: "How do I know my size?", a: "Check our size guide or contact us for personalized fitting advice." },
              { q: "Are your shoes authentic?", a: "100% authentic. We work directly with authorized brand distributors." }
            ].map((item, index) => (
              <div key={index} className="bg-white/70 backdrop-blur-sm p-6 rounded-2xl border border-orange-100/50 hover:border-orange-200 transition-all duration-300">
                <h3 className="font-semibold text-gray-900 mb-2">{item.q}</h3>
                <p className="text-gray-600">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;