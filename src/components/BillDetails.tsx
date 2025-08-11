import React from "react";

const BillDetails: React.FC = () => {
  return (
    <div className="p-4 border-b">
      <h3 className="font-semibold mb-2">Bill details</h3>
      <div className="flex justify-between text-sm mb-1">
        <span>Items total <span className="text-green-600 text-xs">Saved ₹10</span></span>
        <span>₹70</span>
      </div>
      <div className="flex justify-between text-sm mb-1">
        <span>Delivery charge</span>
        <span>₹25</span>
      </div>
      <div className="flex justify-between text-sm mb-1">
        <span>Handling charge</span>
        <span>₹2</span>
      </div>
      <div className="flex justify-between text-sm mb-1">
        <span>Small cart charge</span>
        <span>₹20</span>
      </div>
      <div className="flex justify-between font-semibold mt-2">
        <span>Grand total</span>
        <span>₹117</span>
      </div>
    </div>
  );
};

export default BillDetails;
