import React, { useState } from 'react';
import { Eye, EyeOff, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';


function Register() {

  return (
    <div className="min-h-screen flex">
      {/* Left Panel - Register Form */}
      <div className="w-3/5 flex items-center justify-center bg-white px-8">
        <div className="w-full max-w-md">
          <div className="mb-8">
            <h1 className="text-2xl font-bold text-gray-900 mb-2">
              JOIN KICKS
            </h1>
            <p className="text-gray-600 text-sm">Create your account to get started</p>
          </div>

          <div className="space-y-6">
            {/* Username Field */}
            <div>
              <label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-2">
                User name
              </label>
              <input
                id="username"
                type="text"
                placeholder="Enter your username"
                className="w-full px-3 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                required
              />
            </div>

            {/* Email Field */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Email Address
              </label>
              <input
                id="email"
                type="email"
                placeholder="Enter your email"
                className="w-full px-3 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                required
              />
            </div>

            {/* Password Field */}
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                Password
              </label>
              <div className="relative">
                <input
                  id="password"
                  type="password"
                  placeholder="Create a password"
                  className="w-full px-3 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent pr-10"
                  required
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 pr-3 flex items-center"
                >
                  <Eye className="h-5 w-5 text-gray-400" />
                </button>
              </div>
            </div>

            {/* Confirm Password Field */}
            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-2">
                Confirm Password
              </label>
              <div className="relative">
                <input
                  id="confirmPassword"
                  type="password"
                  placeholder="Confirm your password"
                  className="w-full px-3 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent pr-10"
                  required
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 pr-3 flex items-center"
                >
                  <Eye className="h-5 w-5 text-gray-400" />
                </button>
              </div>
            </div>

            {/* Register Button */}
            <button className="w-full bg-amber-600 hover:bg-amber-700 text-white font-medium py-3 px-4 rounded-md transition duration-200 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2">
              Create Account
            </button>

            {/* Login Link */}
            <div className="text-center">
              <p className="text-sm text-gray-600">
                Already have an account?{' '}
                <Link to = "/Login">
                <button className="font-medium text-amber-600 hover:text-amber-500">
                  Sign In
                </button>
                </Link>
              </p>
            </div>
         </div>
        </div>
      </div>

      {/* Right Panel - Image */}
      <div className="w-2/5 relative bg-gradient-to-br from-orange-200 to-orange-300">
        <div className="absolute inset-0 flex items-center justify-center"> 
          <div className="relative">            
             <div className="absolute relative w-80 h-80 bg-gray-300   "> 
                <img
                    src="src/assets/loginp.png" 
                    alt="shoe"
                />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;