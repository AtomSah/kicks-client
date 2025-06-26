// src/components/CartDrawer.jsx
import { useCart } from "../context/CartContext";
import { X } from "lucide-react";

const CartDrawer = () => {
  const { cartItems, isCartOpen, toggleCart, removeFromCart } = useCart();

  if (!isCartOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-black/30">
      <div className="w-full sm:w-96 bg-white shadow-lg p-6 overflow-y-auto">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold">Shopping Cart</h2>
          <button onClick={toggleCart}>
            <X className="w-5 h-5" />
          </button>
        </div>

        {cartItems.length === 0 ? (
          <p className="text-gray-500">Your cart is empty.</p>
        ) : (
          <div className="space-y-4">
            {cartItems.map((item, index) => (
              <div key={index} className="flex items-center space-x-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-16 h-16 object-cover rounded"
                />
                <div className="flex-1">
                  <h3 className="font-medium">{item.name}</h3>
                  <p className="text-sm text-gray-500">
                    {item.quantity} x Rs. {item.price}
                  </p>
                </div>
                <button onClick={() => removeFromCart(item.id)}>
                  <X className="text-gray-400 hover:text-red-600" />
                </button>
              </div>
            ))}
          </div>
        )}

        {cartItems.length > 0 && (
          <div className="mt-6">
            <button className="w-full bg-yellow-600 hover:bg-yellow-700 text-white py-3 px-4 rounded-md font-semibold">
              Checkout
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartDrawer;
