import { Link } from 'react-router-dom';
import { ShoppingCart, User, ChevronDown } from 'lucide-react';
import { useContext, useState, useRef, useEffect } from 'react';
import { AuthContext } from '../context/AuthContext';
import { useCart } from '../context/CartContext';

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);
  const { toggleCart } = useCart();

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

  // Function to get user initials
  const getUserInitials = (name) => {
    if (!name) return 'U';
    return name.split(' ').map(word => word[0]).join('').toUpperCase().slice(0, 2);
  };

  return (
    <header className="bg-white shadow-sm relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img src="src/assets/baki-photo/logo.png" alt="Kicks Logo" className="h-10 w-10 object-contain" />
            <div className="text-2xl font-bold text-gray-900">Kicks</div>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link to="/" className="text-gray-700 hover:text-gray-900 font-medium">Home</Link>
            <Link to="/shop" className="text-gray-700 hover:text-gray-900 font-medium">Shop</Link>
            <Link to="/AboutUs" className="text-gray-700 hover:text-gray-900 font-medium">About Us</Link>
            <Link to="/contact" className="text-gray-700 hover:text-gray-900 font-medium">Contact</Link>
          </nav>

          {/* Right Side */}
          <div className="flex items-center space-x-6 relative">
            {user ? (
              <>
                <Link to={"/cart"}>
                  <ShoppingCart className="w-6 h-6 text-gray-700 hover:text-amber-600 cursor-pointer" />
                </Link>

                {/* Profile Dropdown */}
                <div className="relative" ref={dropdownRef}>
                  <button 
                    onClick={toggleDropdown}
                    className="flex items-center space-x-2 bg-gray-50 hover:bg-gray-100 px-3 py-2 rounded-full transition-colors duration-200"
                  >
                    {/* Profile Avatar */}
                    <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-medium">
                      {getUserInitials(user.username)}
                    </div>
                    
                    {/* Username and Arrow */}
                    <div className="flex items-center space-x-1">
                      <span className="text-gray-700 font-medium text-sm hidden sm:block">
                        {user.username}
                      </span>
                      <ChevronDown className={`w-4 h-4 text-gray-500 transition-transform duration-200 ${showDropdown ? 'rotate-180' : ''}`} />
                    </div>
                  </button>

                  {showDropdown && (
                    <div className="absolute right-0 mt-2 w-64 bg-white border border-gray-200 shadow-xl rounded-xl z-50 overflow-hidden">
                      {/* Profile Header */}
                      <div className="px-4 py-4 bg-gray-50 border-b border-gray-200">
                        <div className="flex items-center space-x-3">
                          <div className="w-10 h-10 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-medium">
                            {getUserInitials(user.username)}
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="text-sm font-semibold text-gray-900 truncate">
                              {user.username}
                            </p>
                            <p className="text-xs text-gray-500 truncate">
                              {user.email}
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Logout Button */}
                      <div className="p-2">
                        <button
                          onClick={() => {
                            logout();
                            setShowDropdown(false);
                          }}
                          className="w-full text-left px-3 py-2 text-sm text-red-600 hover:bg-red-50 hover:text-red-700 rounded-lg transition-colors duration-200 flex items-center space-x-2"
                        >
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                          </svg>
                          <span>Sign Out</span>
                        </button>
                      </div>
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