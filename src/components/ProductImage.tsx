import React from "react";

const ProductImage: React.FC<{ image: string }> = ({ image }) => (
  <div className="w-full flex justify-center">
    <img
      src={image}
      alt="Product"
      className="w-2/3 md:w-1/3 rounded-xl object-contain"
    />
  </div>
);

export default ProductImage;
