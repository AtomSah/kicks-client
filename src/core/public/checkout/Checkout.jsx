import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../../../context/CartContext';

const CheckoutPage = () => {
  const { cartItems, clearCart } = useCart();
  const [selectedPayment, setSelectedPayment] = useState('');
  const navigate = useNavigate();

  const [userDetails, setUserDetails] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
  });

  const handleInputChange = (e) => {
    setUserDetails({ ...userDetails, [e.target.name]: e.target.value });
  };

  const handlePayment = () => {
    if (!selectedPayment) {
      alert("Please select a payment method.");
      return;
    }

    if (!userDetails.name || !userDetails.email || !userDetails.phone || !userDetails.address) {
      alert("Please fill all your details.");
      return;
    }

    // Simulate order success
    alert("Order placed successfully!");
    clearCart();
    navigate('/');
  };

  const totalPrice = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6">
        <h1 className="text-2xl font-bold mb-6 text-center text-gray-900">Checkout & Payment</h1>

        {/* Order Summary */}
        <div className="mb-6">
          <h2 className="text-lg font-semibold mb-2 text-gray-800">Order Summary:</h2>
          <ul className="list-disc pl-6 text-gray-700">
            {cartItems.map((item, index) => (
              <li key={index} className="mb-1">
                {item.name} x {item.quantity} - Rs {item.price * item.quantity}
              </li>
            ))}
          </ul>
          <p className="mt-4 font-semibold text-gray-800">Total: Rs {totalPrice.toFixed(2)}</p>
        </div>

        {/* User Info */}
        <div className="mb-6">
          <h2 className="text-lg font-semibold mb-2 text-gray-800">Your Details:</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input type="text" name="name" value={userDetails.name} onChange={handleInputChange} placeholder="Full Name" className="border p-2 rounded w-full" />
            <input type="email" name="email" value={userDetails.email} onChange={handleInputChange} placeholder="Email" className="border p-2 rounded w-full" />
            <input type="tel" name="phone" value={userDetails.phone} onChange={handleInputChange} placeholder="Phone Number" className="border p-2 rounded w-full" />
            <input type="text" name="address" value={userDetails.address} onChange={handleInputChange} placeholder="Delivery Address" className="border p-2 rounded w-full" />
          </div>
        </div>

        {/* Payment Option */}
        <div className="mb-6">
          <label className="block text-gray-700 mb-2 font-semibold">Select Payment Method:</label>
          <select
            value={selectedPayment}
            onChange={(e) => setSelectedPayment(e.target.value)}
            className="w-full p-3 border rounded-lg"
          >
            <option value="">-- Choose Payment Method --</option>
            <option value="esewa">eSewa</option>
            <option value="phonepe">PhonePe</option>
          </select>
        </div>

        {/* QR Code Display */}
        {selectedPayment && (
          <div className="mb-6 text-center">
            <h3 className="text-lg font-semibold mb-2 text-gray-700">Scan QR to Pay</h3>
            <img
              src={selectedPayment === 'esewa' ? "src/assets/qr/phonepe.png" : "src/assets/qr/phonepe.png"}
              alt={`${selectedPayment} QR`}
              className="mx-auto w-64 h-64 object-contain border p-2 rounded"
            />
          </div>
        )}

        {/* Confirm Button */}
        <button
          onClick={handlePayment}
          className="w-full bg-green-600 text-white font-semibold py-3 rounded hover:bg-green-700 transition duration-300"
        >
          Confirm Order & Pay
        </button>
      </div>
    </div>
  );
};

export default CheckoutPage;
