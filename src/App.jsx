import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './core/public/homePage/home';
import Login from './core/public/auth/login';
import Register from './core/public/auth/register';
import Shop from './core/public/productDetails/productDetails';
import AboutUs from './core/public/aboutUs';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/Shop" element={<Shop />} />
        <Route path="/AboutUs" element={<AboutUs />} />
      </Routes>
    </Router>
  );
}

export default App;
