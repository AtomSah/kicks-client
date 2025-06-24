import { Link } from 'react-router-dom';


const Navbar = () => {

    return (
        <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between  items-center h-16">
            <div className="flex left-0 items-center">
              <div className="flex items-center space-x-3">
                <img 
                  src="src/assets/logo.png" 
                  alt="Kicks Logo" 
                  className="h-10 w-10 object-contain"
                />
                <div className="text-2xl font-bold text-gray-900">
                  Kicks
                </div>
              </div>
            </div>
            
            <nav className="hidden md:flex space-x-8">
              <Link to="/" className="text-gray-700 hover:text-gray-900 font-medium">
                Home
              </Link>
              <Link to="/shop" className="text-gray-700 hover:text-gray-900 font-medium">
                Shop
              </Link>
              <Link to ="/AboutUs" className="text-gray-700 hover:text-gray-900 font-medium">About Us</Link>
              <a href="#" className="text-gray-700 hover:text-gray-900 font-medium">Contact</a>
            </nav>
            
            <div className="flex items-center space-x-8 right-0">
              <Link to="/Login">
                <button className="bg-amber-950 text-white px-6 py-2 rounded-lg hover:bg-amber-900 transition-colors">
                  Login
                </button>
              </Link>
              <Link to ="/Register">
              <button className="bg-amber-950 text-white px-6 py-2 rounded-lg hover:bg-amber-900 transition-colors">
                Register
              </button>
              </Link>
            </div>
          </div>
        </div>
      </header>
    )

}

export default Navbar;