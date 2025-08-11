import React from "react";

const CancelPolicy: React.FC = () => {
  return (
    <div className="bg-gray-100 p-4 text-sm text-gray-600">
      <p className="font-semibold">Cancellation Policy</p>
      <p>
        Orders cannot be cancelled once packed for delivery. In case of unexpected delays, 
        a refund will be provided, if applicable.
      </p>
    </div>
  );
};

export default CancelPolicy;
