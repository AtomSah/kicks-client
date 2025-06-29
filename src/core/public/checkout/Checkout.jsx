import React, { useState } from 'react';
// import esewaQR from '../../assets/qr/esewa.png';
// import phonepeQR from '../../assets/qr/phonepe.png';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../../../context/CartContext';

const CheckoutPage = () => {
  const { cartItems, clearCart } = useCart();
  const [selectedPayment, setSelectedPayment] = useState('');
  const navigate = useNavigate();

  const handlePayment = () => {
    if (!selectedPayment) {
      alert("Please select a payment method.");
      return;
    }

    // Simulate successful payment
    alert("Payment successful!");

    // Clear the cart and navigate to confirmation page (optional)
    clearCart();
    navigate('/');
  };

  const totalPrice = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg p-6">
        <h1 className="text-2xl font-bold mb-6 text-center text-gray-900">Checkout & Payment</h1>

        {/* Total Summary */}
        <div className="mb-4 text-lg text-gray-800">
          <p><span className="font-semibold">Total Items:</span> {cartItems.length}</p>
          <p><span className="font-semibold">Total Price:</span> Rs {totalPrice.toFixed(2)}</p>
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
              src={selectedPayment === 'esewa' ? esewaQR : phonepeQR}
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
          Confirm Payment
        </button>
      </div>
    </div>
  );
};

export default CheckoutPage;
