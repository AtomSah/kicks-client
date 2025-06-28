import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../../../context/CartContext';
import Navbar from '../../../components/navbar';
import Footer from '../../../components/footer';

const CartPage = () => {
  const { cartItems, removeFromCart, clearCart } = useCart();

  const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <div className="max-w-6xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">Your Shopping Cart</h1>

        {cartItems.length === 0 ? (
          <div className="text-center text-gray-600">
            <p className="text-lg">Your cart is currently empty.</p>
            <Link to="/shop" className="mt-4 inline-block text-white bg-gray-800 hover:bg-gray-900 px-6 py-3 rounded-lg font-semibold transition">Browse Products</Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-6">
              {cartItems.map((item) => (
                <div key={item._id} className="flex items-center bg-white shadow rounded-lg overflow-hidden">
                  <img src={item.image} alt={item.name} className="w-24 h-24 object-contain bg-gray-100" />
                  <div className="flex-1 p-4">
                    <h2 className="text-lg font-semibold text-gray-900">{item.name}</h2>
                    <p className="text-sm text-gray-500">Size: {item.size || 'N/A'}</p>
                    <p className="text-sm text-gray-500">Quantity: {item.quantity}</p>
                  </div>
                  <div className="flex flex-col items-end p-4">
                    <p className="text-lg font-semibold text-gray-900">Rs {item.price * item.quantity}</p>
                    <button onClick={() => removeFromCart(item._id)} className="text-red-500 text-sm hover:underline">Remove</button>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md h-fit">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Order Summary</h2>
              <div className="flex justify-between items-center mb-2">
                <span className="text-gray-600">Subtotal</span>
                <span className="text-gray-800 font-medium">Rs {total}</span>
              </div>
              <div className="flex justify-between items-center border-t pt-4 mt-4">
                <span className="text-lg font-semibold text-gray-900">Total</span>
                <span className="text-lg font-bold text-gray-900">Rs {total}</span>
              </div>
              <button className="mt-6 w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded-lg font-semibold transition">Proceed to Checkout</button>
              <button
                onClick={clearCart}
                className="mt-4 w-full text-red-600 hover:underline text-sm"
              >
                Clear Cart
              </button>
            </div>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default CartPage;
