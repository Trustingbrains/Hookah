import React from "react";
import { Link } from "react-router-dom";
import { productList } from "../data/products";

interface ProductGridProps {
  selectedCategory: string;
  searchTerm: string;
}

const ProductGrid: React.FC<ProductGridProps> = ({ selectedCategory, searchTerm }) => {
  const filteredProducts = productList.filter((product) => {
    const matchesCategory =
      selectedCategory === "all" ||
      product.category?.toLowerCase().includes(selectedCategory.toLowerCase());
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 p-4">
      {filteredProducts.map((product) => (
        <Link
          key={product.id}
          to={`/product/${product.id}`}
          className="border p-2 rounded shadow-sm hover:shadow-md transition"
        >
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-40 object-cover rounded"
          />
          <h3 className="mt-2 font-semibold">{product.name}</h3>
          <p className="text-green-600 font-bold">₹{product.price}</p>
        </Link>
      ))}
      {filteredProducts.length === 0 && <p>No products found.</p>}
    </div>
  );
};

export default ProductGrid;
