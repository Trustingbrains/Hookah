import React from "react";
import { Product } from "../data/products";
import { useNavigate } from "react-router-dom";

interface ActionButtonsProps {
  product: Product;
  onAddToCart: (product: Product) => void;
}

const ActionButtons: React.FC<ActionButtonsProps> = ({ product, onAddToCart }) => {
  const navigate = useNavigate();

  const handleAddToCart = () => {
    onAddToCart(product);
    navigate("/cart");
  };

  const handleBuyNow = () => {
    onAddToCart(product);
    navigate("/cart");
  };

  return (
    <div className="flex gap-4">
      <button
        className="flex-1 bg-black text-white py-2 rounded"
        onClick={handleAddToCart}
      >
        Add to Cart
      </button>
      <button
        className="flex-1 bg-gray-200 text-black py-2 rounded"
        onClick={handleBuyNow}
      >
        Buy Now
      </button>
    </div>
  );
};

export default ActionButtons;
