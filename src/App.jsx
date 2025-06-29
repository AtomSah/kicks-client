import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './core/public/homePage/home';
import Login from './core/public/auth/login';
import Register from './core/public/auth/register';
import Shop from './core/public/product/productPage';
import ProductDetails from './core/public/product/productDetails';
import CartDrawer from './components/CartDrawer';
import CartPage from './core/public/cart/cartPage';
import AboutUs from './components/aboutUs';
import CheckoutPage from './core/public/checkout/Checkout';

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
        <Route path="/contactPage" element={<contactPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/CheckoutPage" element={<CheckoutPage />} />

      </Routes>

      <CartDrawer />
    </Router>
  );
}

export default App;
