import React from "react";
import { Product } from "../data/products";

interface CartItemProps {
  product: Product;
  quantity: number;
  onIncrease: () => void;
  onDecrease: () => void;
}

const CartItem: React.FC<CartItemProps> = ({
  product,
  quantity,
  onIncrease,
  onDecrease,
}) => {
  return (
    <div className="flex items-center justify-between p-4 border-t border-b">
      <div className="flex items-center gap-4">
        <img
          src={product.image}
          alt={product.name}
          className="w-16 h-16 object-cover rounded"
        />
        <div>
          <h3 className="font-medium">{product.name}</h3>
          <p className="text-sm text-gray-500">{product.size}</p>
          <p className="font-semibold">
            ₹{product.price}{" "}
            {product.originalPrice > product.price && (
              <span className="line-through text-gray-400 text-sm">
                ₹{product.originalPrice}
              </span>
            )}
          </p>
        </div>
      </div>

      <div className="flex items-center border rounded-lg">
        <button
          onClick={onDecrease}
          className="px-2 py-1 text-lg hover:bg-gray-100"
        >
          −
        </button>
        <span className="px-3">{quantity}</span>
        <button
          onClick={onIncrease}
          className="px-2 py-1 text-lg hover:bg-gray-100"
        >
          +
        </button>
      </div>
    </div>
  );
};

export default CartItem;
