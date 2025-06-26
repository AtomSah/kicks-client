import { Link } from 'react-router-dom';
import { ShoppingCart, User } from 'lucide-react';
import { useContext, useState, useRef, useEffect } from 'react';
import { AuthContext } from '../context/AuthContext';
import { useCart } from '../context/CartContext'; // ✅ Import useCart
import logo from '../assets/logo.png';

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);
  const { toggleCart } = useCart(); // ✅ Destructure toggleCart

  const toggleDropdown = () => setShowDropdown(!showDropdown);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <header className="bg-white shadow-sm relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img src={logo} alt="Kicks Logo" className="h-10 w-10 object-contain" />
            <div className="text-2xl font-bold text-gray-900">Kicks</div>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link to="/" className="text-gray-700 hover:text-gray-900 font-medium">Home</Link>
            <Link to="/shop" className="text-gray-700 hover:text-gray-900 font-medium">Shop</Link>
            <Link to="/AboutUs" className="text-gray-700 hover:text-gray-900 font-medium">About Us</Link>
            <a href="#" className="text-gray-700 hover:text-gray-900 font-medium">Contact</a>
          </nav>

          {/* Right Side */}
          <div className="flex items-center space-x-6 relative">
            {user ? (
              <>
                {/* ✅ Cart Button instead of Link */}
                <button onClick={toggleCart}>
                  <ShoppingCart className="w-6 h-6 text-gray-700 hover:text-amber-600 cursor-pointer" />
                </button>

                {/* Profile Dropdown */}
                <div className="relative" ref={dropdownRef}>
                  <button onClick={toggleDropdown}>
                    <User className="w-6 h-6 text-gray-700 hover:text-amber-600 cursor-pointer" />
                  </button>

                  {showDropdown && (
                    <div className="absolute right-0 mt-2 w-60 bg-white border border-gray-200 shadow-lg rounded-lg z-50 p-4">
                      <p className="text-sm text-gray-600 mb-1">
                        <span className="font-semibold text-gray-800">Username:</span> {user.username}
                      </p>
                      <p className="text-sm text-gray-600 mb-3">
                        <span className="font-semibold text-gray-800">Email:</span> {user.email}
                      </p>
                      <button
                        onClick={logout}
                        className="w-full bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-md transition"
                      >
                        Logout
                      </button>
                    </div>
                  )}
                </div>
              </>
            ) : (
              <>
                <Link to="/Login">
                  <button className="bg-amber-950 text-white px-6 py-2 rounded-lg hover:bg-amber-900 transition-colors">
                    Login
                  </button>
                </Link>
                <Link to="/Register">
                  <button className="bg-amber-950 text-white px-6 py-2 rounded-lg hover:bg-amber-900 transition-colors">
                    Register
                  </button>
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
