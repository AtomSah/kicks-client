import { Contact } from 'lucide-react'
import React from 'react'
import Navbar from '../../components/navbar'

const Contactpage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-orange-50">
      <Navbar/ >
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
    </div>)
}

export default Contactpage