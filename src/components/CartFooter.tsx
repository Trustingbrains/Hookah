import React from "react";

interface Props {
  total: number;
}

const CartFooter: React.FC<Props> = ({ total }) => {
  return (
    <div className="flex justify-between items-center p-4 bg-green-600 text-white font-semibold">
      <span>₹{total} TOTAL</span>
      <button className="bg-white text-green-600 px-4 py-2 rounded">
        Login to Proceed
      </button>
    </div>
  );
};

export default CartFooter;
