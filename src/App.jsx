import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './core/public/homePage/home';
import Login from './core/public/auth/login';
import Register from './core/public/auth/register';
import Shop from './core/public/product/productPage';
import AboutUs from './core/public/aboutUs';
import ProductDetails from './core/public/product/productDetails';
import CartDrawer from './components/CartDrawer'; // ✅ import here
import CartPage from './core/public/cart/cartPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/Shop" element={<Shop />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>

      <CartDrawer />
    </Router>
  );
}

export default App;
