import React, { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = () => {
    console.log('Login attempt:', { username, password, rememberMe });
  };

  return (
    <div className="min-h-screen flex flex-col lg:flex-row relative">
      {/* Left Panel - Login Form */}
      <div className="w-full lg:w-3/5 flex items-center justify-center bg-white px-4 sm:px-8 py-8 lg:py-0">
        <div className="w-full max-w-md">
          <div className="mb-8">
            <h1 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2 text-center lg:text-left">
              WELCOME TO KICKS
            </h1>
          </div>

          <div className="space-y-6">
            <div>
              <label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-2">
                User name
              </label>
              <input
                id="username"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Username"
                className="w-full px-3 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                required
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                Enter your Password
              </label>
              <div className="relative">
                <input
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Password"
                  className="w-full px-3 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent pr-10"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center"
                >
                  {showPassword ? (
                    <EyeOff className="h-5 w-5 text-gray-400" />
                  ) : (
                    <Eye className="h-5 w-5 text-gray-400" />
                  )}
                </button>
              </div>
            </div>

            {/* Remember Me and Forgot Password */}
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="h-4 w-4 text-amber-600 focus:ring-amber-500 border-gray-300 rounded"
                />
                <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700">
                  Remember me
                </label>
              </div>
              <div>
                <a href="#" className="text-sm text-gray-600 hover:text-gray-500">
                  Forgot Password?
                </a>
              </div>
            </div>

            {/* Login Button */}
            <button
              onClick={handleSubmit}
              className="w-full bg-amber-600 hover:bg-amber-700 text-white font-medium py-3 px-4 rounded-md transition duration-200 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2"
            >
              Login
            </button>

            {/* Register Link */}
            <div className="text-center">
              <p className="text-sm text-gray-600">
                Don't have an account?{' '}
                <a href="#" className="font-medium text-amber-600 hover:text-amber-500">
                  Register
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Right Panel - Hidden on mobile */}
      <div className="hidden lg:block lg:w-2/5 bg-gradient-to-br from-orange-200 to-orange-300">
      </div>

      {/* Mobile Background */}
      <div className="lg:hidden absolute inset-0 bg-gradient-to-br from-orange-200 to-orange-300 opacity-10 -z-10">
      </div>

      {/* Centered Image - Responsive positioning */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 lg:w-[600px] lg:h-[600px] flex justify-center absolute 
                       bottom-4 right-4 sm:bottom-8 sm:right-8 md:bottom-12 md:right-12 lg:bottom-auto lg:right-44 lg:top-1/2 lg:-translate-y-1/2
                       bg-gray-300 rounded-lg shadow-lg pointer-events-auto">
          <img
            src="src/assets/loginp.png"
            alt="shoe"
            className="max-w-full max-h-full object-contain p-2 sm:p-4"
          />
        </div>
      </div>
    </div>
  )
};

export default Login

