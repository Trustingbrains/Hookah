

const ProductInfo = ({ product }: any) => {
  return (
    <div className="px-4">
      <h2 className="text-xl font-semibold">
        {product.name} {product.size}, {product.material} ({product.color})
      </h2>
      <div className="flex items-center gap-2 mt-2">
        <span className="bg-green-600 text-white px-2 py-1 text-sm rounded">
          {product.rating} ★
        </span>
        <span className="text-sm text-blue-600 font-medium">Good</span>
        <span className="text-sm text-gray-500">
          ({product.ratingCount} ratings)
        </span>
      </div>
      <div className="mt-2">
        <span className="text-green-700 font-semibold text-xl">
          ↓ {product.discount}%{" "}
        </span>
        <span className="line-through text-gray-500">₹{product.originalPrice}</span>{" "}
        <span className="text-xl font-bold">₹{product.price}</span>
      </div>
    </div>
  );
};

export default ProductInfo;
