import React from "react";
import CartItem from "../components/CartItem";
import BillDetails from "../components/BillDetails";
import CancelPolicy from "../components/CancelPolicy";
import CartFooter from "../components/CartFooter";
import { useCart } from "../components/CartContext";

const CartPage: React.FC = () => {
  const { cartItems, increaseQuantity, decreaseQuantity } = useCart();

  const total = cartItems.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );

  return (
    <div className="w-full h-screen bg-white shadow-lg rounded-none overflow-auto font-sans">
      {/* Header */}
      <div className="p-4 flex justify-between items-center border-b">
        <h2 className="text-lg font-bold">My Cart</h2>
        <button 
        className="text-gray-500 hover:text-black text-xl"
        onClick={() => window.history.back()}
        >×</button>
      </div>

      {/* Delivery Info */}
      <div className="p-4 flex items-center gap-3">
        <div className="bg-green-100 text-green-600 rounded-full p-2 text-lg">
          ⏱
        </div>
        <div>
          <p className="font-semibold">Delivery in 8 minutes</p>
          <p className="text-sm text-gray-500">
            Shipment of {cartItems.length}{" "}
            {cartItems.length === 1 ? "item" : "items"}
          </p>
        </div>
      </div>

      {/* Cart Items */}
      {cartItems.length > 0 ? (
        cartItems.map((item) => (
          <CartItem
            key={item.product.id}
            product={item.product}
            quantity={item.quantity}
            onIncrease={() => increaseQuantity(item.product.id)}
            onDecrease={() => decreaseQuantity(item.product.id)}
          />
        ))
      ) : (
        <div className="p-4 text-gray-500 text-center">
          Your cart is empty
        </div>
      )}

      {/* Bill Details */}
      {cartItems.length > 0 && <BillDetails />}

      {/* Cancellation Policy */}
      {cartItems.length > 0 && <CancelPolicy />}

      {/* Footer */}
      <CartFooter total={total} />
    </div>
  );
};

export default CartPage;
