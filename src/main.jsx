  import { StrictMode } from 'react';
  import { createRoot } from 'react-dom/client';
  import './index.css';
  import App from './App.jsx';
  import { AuthProvider } from './context/AuthContext.jsx';
  import { CartProvider } from './context/CartContext.jsx';
  import CartDrawer from './components/CartDrawer.jsx';
  import { ToastContainer } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

  createRoot(document.getElementById('root')).render(
    <StrictMode>
      <AuthProvider>
        <CartProvider>
          <App />
          <ToastContainer position="top-right" autoClose={3000} theme="light" />
        </CartProvider>
      </AuthProvider>
    </StrictMode>
  );
