
import { useState } from 'react';
import Navbar from '../../components/navbar'
import { Clock, Mail, MapPin, MessageCircle, Phone, Send } from 'lucide-react';

const Contactpage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
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
            Get In Touch
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-orange-600 mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-orange-100 font-light">
            We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl font-bold text-gray-900 mb-8">
                  Let's <span className="text-orange-500">Connect</span>
                </h2>
                <p className="text-lg text-gray-600 mb-12">
                  Have questions about our shoes or need help with your order? We're here to help!
                </p>
              </div>

              <div className="space-y-6">
                {[
                  { icon: <Phone className="w-6 h-6" />, title: "Phone", info: "+1 (555) 123-4567", subtitle: "Mon-Fri 9AM-6PM" },
                  { icon: <Mail className="w-6 h-6" />, title: "Email", info: "hello@kicks.com", subtitle: "We'll respond within 24 hours" },
                  { icon: <MapPin className="w-6 h-6" />, title: "Address", info: "123 Shoe Street, Fashion District", subtitle: "New York, NY 10001" },
                  { icon: <Clock className="w-6 h-6" />, title: "Store Hours", info: "Mon-Sat: 10AM-8PM", subtitle: "Sun: 12PM-6PM" }
                ].map((contact, index) => (
                  <div key={index} className="flex items-start space-x-4 p-6 bg-white rounded-2xl border border-orange-100 hover:border-orange-200 hover:shadow-lg transition-all duration-300">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-orange-100 to-orange-200 rounded-xl flex items-center justify-center text-orange-600">
                      {contact.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-1">{contact.title}</h3>
                      <p className="text-orange-600 font-medium">{contact.info}</p>
                      <p className="text-gray-500 text-sm">{contact.subtitle}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-3xl shadow-xl p-8 border border-orange-100">
              <div className="flex items-center mb-8">
                <MessageCircle className="w-8 h-8 text-orange-500 mr-3" />
                <h3 className="text-2xl font-bold text-gray-900">Send us a message</h3>
              </div>

              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200"
                    placeholder="What's this about?"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200 resize-none"
                    placeholder="Tell us how we can help you..."
                  />
                </div>

                <button
                  onClick={handleSubmit}
                  className="w-full bg-gradient-to-r from-orange-00 to-orange-600 text-white py-4 px-6 rounded-xl font-semibold text-lg hover:from-orange-600 hover:to-orange-700 transform hover:scale-105 transition-all duration-200 flex items-center justify-center space-x-2"
                >
                  <Send className="w-5 h-5" />
                  <span>Send Message</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>)
}

export default Contactpage