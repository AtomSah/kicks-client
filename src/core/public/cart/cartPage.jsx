import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../../../context/CartContext';
import { Trash2, ShoppingBag, ArrowLeft, Plus, Minus } from 'lucide-react';
import Navbar from '../../../components/navbar';
import Footer from '../../../components/footer';

const CartPage = () => {
    const { cartItems, removeFromCart, clearCart } = useCart();

    const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

    return (
        <div className="min-h-screen bg-gray-50">
            <Navbar />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                {/* Header Section */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                        Your Shopping 
                        <span className="text-red-600"> Cart</span>
                    </h1>
                    <p className="text-gray-600 text-lg">Review your selected items before checkout</p>
                </div>

                {cartItems.length === 0 ? (
                    <div className="text-center py-16">
                        <div className="max-w-md mx-auto">
                            <ShoppingBag className="w-24 h-24 text-gray-300 mx-auto mb-6" />
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">Your cart is empty</h2>
                            <p className="text-gray-600 mb-8">Looks like you haven't added any items to your cart yet.</p>
                            <Link to="/shop" className="inline-flex items-center bg-gray-800 text-white px-8 py-4 rounded-lg font-semibold hover:bg-gray-900 transition-all duration-300 transform hover:scale-105 shadow-lg">
                                <ArrowLeft className="w-5 h-5 mr-2" />
                                Continue Shopping
                            </Link>
                        </div>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 xl:grid-cols-4 gap-8">
                        {/* Cart Items Section */}
                        <div className="xl:col-span-3">
                            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                                <div className="p-6 border-b border-gray-200">
                                    <div className="flex items-center justify-between">
                                        <h2 className="text-xl font-bold text-gray-900">Cart Items ({cartItems.length})</h2>
                                        <button
                                            onClick={clearCart}
                                            className="text-red-600 hover:text-red-700 text-sm font-medium flex items-center"
                                        >
                                            <Trash2 className="w-4 h-4 mr-1" />
                                            Clear All
                                        </button>
                                    </div>
                                </div>
                                
                                <div className="divide-y divide-gray-200">
                                    {cartItems.map((item) => (
                                        <div key={item._id} className="p-6 hover:bg-gray-50 transition-colors duration-200">
                                            <div className="flex items-center space-x-6">
                                                {/* Product Image */}
                                                <div className="flex-shrink-0">
                                                    <div className="w-24 h-24 bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl overflow-hidden shadow-md">
                                                        <img 
                                                            src={item.image} 
                                                            alt={item.name} 
                                                            className="w-full h-full object-contain p-2"
                                                        />
                                                    </div>
                                                </div>

                                                {/* Product Details */}
                                                <div className="flex-1 min-w-0">
                                                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.name}</h3>
                                                    <div className="flex items-center space-x-4 text-sm text-gray-600">
                                                        <span className="bg-gray-100 px-3 py-1 rounded-full">
                                                            Size: {item.size || 'N/A'}
                                                        </span>
                                                        <span className="bg-amber-100 text-amber-800 px-3 py-1 rounded-full">
                                                            Qty: {item.quantity}
                                                        </span>
                                                    </div>
                                                </div>

                                                {/* Price and Actions */}
                                                <div className="flex flex-col items-end space-y-3">
                                                    <div className="text-right">
                                                        <p className="text-2xl font-bold text-gray-900">Rs {item.price * item.quantity}</p>
                                                        <p className="text-sm text-gray-500">Rs {item.price} each</p>
                                                    </div>
                                                    <button 
                                                        onClick={() => removeFromCart(item._id)} 
                                                        className="flex items-center text-red-600 hover:text-red-700 bg-red-50 hover:bg-red-100 px-3 py-2 rounded-lg transition-colors duration-200"
                                                    >
                                                        <Trash2 className="w-4 h-4 mr-1" />
                                                        Remove
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Continue Shopping */}
                            <div className="mt-6">
                                <Link to="/shop" className="inline-flex items-center text-gray-700 hover:text-gray-900 font-medium">
                                    <ArrowLeft className="w-5 h-5 mr-2" />
                                    Continue Shopping
                                </Link>
                            </div>
                        </div>

                        {/* Order Summary Sidebar */}
                        <div className="xl:col-span-1">
                            <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-6">
                                <h2 className="text-2xl font-bold text-gray-900 mb-6">Order Summary</h2>
                                
                                {/* Summary Details */}
                                <div className="space-y-4 mb-6">
                                    <div className="flex justify-between items-center py-2">
                                        <span className="text-gray-600">Subtotal ({cartItems.length} items)</span>
                                        <span className="font-semibold text-gray-900">Rs {total}</span>
                                    </div>
                                    <div className="flex justify-between items-center py-2">
                                        <span className="text-gray-600">Shipping</span>
                                        <span className="font-semibold text-green-600">Free</span>
                                    </div>
                                    <div className="flex justify-between items-center py-2">
                                        <span className="text-gray-600">Tax</span>
                                        <span className="font-semibold text-gray-900">Calculated at checkout</span>
                                    </div>
                                </div>

                                <div className="border-t border-gray-200 pt-4 mb-6">
                                    <div className="flex justify-between items-center">
                                        <span className="text-xl font-bold text-gray-900">Total</span>
                                        <span className="text-2xl font-bold text-red-600">Rs {total}</span>
                                    </div>
                                </div>

                                {/* Checkout Button */}
                                <Link to="/CheckoutPage">
                                    <button className="w-full bg-gray-800 hover:bg-gray-900 text-white py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg mb-4">
                                        Proceed to Checkout
                                    </button>
                                </Link>

                                {/* Security Badge */}
                                <div className="text-center">
                                    <div className="inline-flex items-center text-xs text-gray-500 bg-gray-50 px-3 py-2 rounded-lg">
                                        <svg className="w-4 h-4 mr-1 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                                        </svg>
                                        Secure Checkout
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>

            <Footer />
        </div>
    );
};

export default CartPage;