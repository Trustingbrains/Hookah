import { Link } from "react-router-dom";

const SimilarProducts = ({ products }: any) => {
  return (
    <div className="px-4 mt-6">
      <h3 className="text-lg font-semibold mb-3">Similar Products</h3>
      <div className="flex gap-4 overflow-x-auto">
        {products.map((p: any) => (
          <Link
            key={p.id}
            to={`/product/${p.id}`}
            className="w-40 flex-shrink-0 border p-2 rounded shadow"
          >
            <img src={p.image} className="w-full h-24 object-contain" alt="" />
            <p className="text-sm mt-1">{p.name}</p>
            <p className="text-green-700 font-bold">₹{p.price}</p>
            <p className="text-xs text-gray-500 line-through">
              ₹{p.originalPrice}
            </p>
            <p className="text-xs text-green-600">{p.discount}% off</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SimilarProducts;
