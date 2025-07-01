import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../../../context/CartContext';
import { CreditCard, Smartphone, Banknote, ShoppingBag, User, Mail, Phone, MapPin, Shield, CheckCircle } from 'lucide-react';
import Navbar from '../../../components/navbar';
import Footer from '../../../components/footer';

const CheckoutPage = () => {
  const { cartItems, clearCart } = useCart();
  const navigate = useNavigate();

  const [selectedPayment, setSelectedPayment] = useState('');
  const [userDetails, setUserDetails] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
  });

  const handleInputChange = (e) => {
    setUserDetails({ ...userDetails, [e.target.name]: e.target.value });
  };

  const handlePayment = async () => {
    if (!selectedPayment) {
      alert("Please select a payment method.");
      return;
    }

    if (!userDetails.name || !userDetails.email || !userDetails.phone || !userDetails.address) {
      alert("Please fill all your details.");
      return;
    }

    try {
      const storedUser = JSON.parse(localStorage.getItem("kicks_user"));
      const token = storedUser?.token;


      const orderPayload = {
        items: cartItems.map(item => ({
          shoe: item._id,
          quantity: item.quantity
        })),
        paymentMethod: selectedPayment,
        shippingDetails: userDetails
      };

      await axios.post('http://localhost:5000/api/orders', orderPayload, {
        headers: {
          Authorization: `Bearer ${token}`,
        }
      });

      alert("Order placed successfully!");
      clearCart();
      navigate('/'); // Go to home or order success page
    } catch (error) {
      console.error("❌ Failed to place order:", error.response?.data || error.message || error);
      alert("Order failed. Check console for details.");
    }

  };

  const totalPrice = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <div className="flex items-center justify-center py-20">
          <div className="text-center">
            <ShoppingBag className="w-24 h-24 text-gray-300 mx-auto mb-6" />
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Your cart is empty</h2>
            <p className="text-lg text-gray-600">Please add items to your cart before checkout.</p>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  const paymentMethods = [
    { id: 'esewa', name: 'eSewa', icon: <Smartphone className="w-5 h-5" />, color: 'from-green-500 to-emerald-600' },
    { id: 'phonepe', name: 'PhonePe', icon: <CreditCard className="w-5 h-5" />, color: 'from-purple-500 to-indigo-600' },
    { id: 'cod', name: 'Cash on Delivery', icon: <Banknote className="w-5 h-5" />, color: 'from-amber-500 to-orange-600' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Checkout &
            <span className="text-red-600"> Payment</span>
          </h1>
          <p className="text-gray-600 text-lg">Complete your order with secure payment</p>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
          {/* Main Checkout Form */}
          <div className="xl:col-span-2 space-y-8">

            {/* Customer Details */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <div className="flex items-center mb-6">
                <User className="w-6 h-6 text-gray-700 mr-3" />
                <h2 className="text-2xl font-bold text-gray-900">Customer Details</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    name="name"
                    value={userDetails.name}
                    onChange={handleInputChange}
                    placeholder="Full Name"
                    className="w-full pl-11 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-gray-800 focus:border-transparent transition-all duration-200"
                  />
                </div>

                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="email"
                    name="email"
                    value={userDetails.email}
                    onChange={handleInputChange}
                    placeholder="Email Address"
                    className="w-full pl-11 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-gray-800 focus:border-transparent transition-all duration-200"
                  />
                </div>

                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="tel"
                    name="phone"
                    value={userDetails.phone}
                    onChange={handleInputChange}
                    placeholder="Phone Number"
                    className="w-full pl-11 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-gray-800 focus:border-transparent transition-all duration-200"
                  />
                </div>

                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    name="address"
                    value={userDetails.address}
                    onChange={handleInputChange}
                    placeholder="Delivery Address"
                    className="w-full pl-11 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-gray-800 focus:border-transparent transition-all duration-200"
                  />
                </div>
              </div>
            </div>

            {/* Payment Methods */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <div className="flex items-center mb-6">
                <CreditCard className="w-6 h-6 text-gray-700 mr-3" />
                <h2 className="text-2xl font-bold text-gray-900">Payment Method</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {paymentMethods.map((method) => (
                  <div key={method.id} className="relative">
                    <input
                      type="radio"
                      id={method.id}
                      name="payment"
                      value={method.id}
                      checked={selectedPayment === method.id}
                      onChange={(e) => setSelectedPayment(e.target.value)}
                      className="sr-only"
                    />
                    <label
                      htmlFor={method.id}
                      className={`block p-4 border-2 rounded-xl cursor-pointer transition-all duration-200 ${selectedPayment === method.id
                        ? 'border-gray-800 bg-gray-50 shadow-md'
                        : 'border-gray-200 hover:border-gray-300'
                        }`}
                    >
                      <div className="flex items-center space-x-3">
                        <div className={`p-2 rounded-lg bg-gradient-to-r ${method.color} text-white`}>
                          {method.icon}
                        </div>
                        <span className="font-semibold text-gray-900">{method.name}</span>
                      </div>
                    </label>
                  </div>
                ))}
              </div>

              {/* QR Code Display */}
              {selectedPayment === 'esewa' && (
                <div className="mt-6 p-6 bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl border border-green-200">
                  <div className="text-center">
                    <div className="inline-flex items-center bg-green-100 text-green-800 px-4 py-2 rounded-full mb-4">
                      <Smartphone className="w-4 h-4 mr-2" />
                      eSewa Payment
                    </div>
                    <p className="text-gray-700 mb-4 font-medium">Scan this QR code with your eSewa app</p>
                    <div className="bg-white p-4 rounded-xl shadow-md inline-block">
                      <img src="/src/assets/qr/esewa.png" alt="eSewa QR" className="w-48 h-48 mx-auto" />
                    </div>
                  </div>
                </div>
              )}

              {selectedPayment === 'phonepe' && (
                <div className="mt-6 p-6 bg-gradient-to-br from-purple-50 to-indigo-50 rounded-xl border border-purple-200">
                  <div className="text-center">
                    <div className="inline-flex items-center bg-purple-100 text-purple-800 px-4 py-2 rounded-full mb-4">
                      <CreditCard className="w-4 h-4 mr-2" />
                      PhonePe Payment
                    </div>
                    <p className="text-gray-700 mb-4 font-medium">Scan this QR code with your PhonePe app</p>
                    <div className="bg-white p-4 rounded-xl shadow-md inline-block">
                      <img src="/src/assets/qr/phonepe.jpg" alt="PhonePe QR" className="w-48 h-48 mx-auto" />
                    </div>
                  </div>
                </div>
              )}

              {selectedPayment === 'cod' && (
                <div className="mt-6 p-6 bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl border border-amber-200">
                  <div className="text-center">
                    <div className="inline-flex items-center bg-amber-100 text-amber-800 px-4 py-2 rounded-full mb-4">
                      <Banknote className="w-4 h-4 mr-2" />
                      Cash on Delivery
                    </div>
                    <p className="text-gray-700 font-medium">Pay when your order arrives at your doorstep</p>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Order Summary Sidebar */}
          <div className="xl:col-span-1">
            <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-6">
              <div className="flex items-center mb-6">
                <ShoppingBag className="w-6 h-6 text-gray-700 mr-3" />
                <h2 className="text-2xl font-bold text-gray-900">Order Summary</h2>
              </div>

              {/* Order Items */}
              <div className="space-y-4 mb-6">
                {cartItems.map((item, index) => (
                  <div key={index} className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-12 h-12 object-contain bg-white rounded-lg"
                    />
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-semibold text-gray-900 truncate">{item.name}</p>
                      <p className="text-xs text-gray-600">Qty: {item.quantity}</p>
                    </div>
                    <p className="text-sm font-bold text-gray-900">Rs {item.price * item.quantity}</p>
                  </div>
                ))}
              </div>

              {/* Price Breakdown */}
              <div className="space-y-3 mb-6">
                <div className="flex justify-between items-center py-2">
                  <span className="text-gray-600">Subtotal ({cartItems.length} items)</span>
                  <span className="font-semibold text-gray-900">Rs {totalPrice}</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-gray-600">Delivery</span>
                  <span className="font-semibold text-green-600">Free</span>
                </div>
                <div className="border-t border-gray-200 pt-3">
                  <div className="flex justify-between items-center">
                    <span className="text-xl font-bold text-gray-900">Total</span>
                    <span className="text-2xl font-bold text-red-600">Rs {totalPrice.toFixed(2)}</span>
                  </div>
                </div>
              </div>

              {/* Confirm Order Button */}
              <button
                onClick={handlePayment}
                className="w-full bg-gray-800 hover:bg-gray-900 text-white font-semibold py-4 rounded-xl text-lg transition-all duration-300 transform hover:scale-105 shadow-lg mb-4"
              >
                <div className="flex items-center justify-center">
                  <CheckCircle className="w-5 h-5 mr-2" />
                  Confirm Order & Pay
                </div>
              </button>

              {/* Security Badge */}
              <div className="text-center">
                <div className="inline-flex items-center text-xs text-gray-500 bg-gray-50 px-3 py-2 rounded-lg">
                  <Shield className="w-4 h-4 mr-1 text-green-500" />
                  100% Secure Payment
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default CheckoutPage;