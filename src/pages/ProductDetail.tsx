// src/pages/ProductDetail.tsx

import { useParams } from "react-router-dom";
import ProductImage from "../components/ProductImage";
import ProductInfo from "../components/ProductInfo";
import OffersSection from "../components/OffersSection";
import ActionButtons from "../components/ActionButtons";
import SimilarProducts from "../components/SimilarProducts";
import { productList, Product } from "../data/products"; // Adjust path if needed

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const product: Product | undefined = productList.find((p) => p.id === id);

  // Temporary addToCart function (replace later with real cart logic)
  const addToCart = (product: Product) => {
    console.log("Added to cart:", product);
    // TODO: Implement real cart logic or use Cart Context
  };

  if (!product) return <div className="p-4 text-red-600">Product not found</div>;

  const similarProducts: Product[] = productList.filter((p) =>
    product.similar.includes(p.id)
  );

  return (
    <div className="p-4 flex flex-col gap-4">
      <ProductImage image={product.image} />
      <ProductInfo product={product} />
      <OffersSection />
      <ActionButtons
        product={product}
        onAddToCart={() => addToCart(product)}
      />
      <SimilarProducts products={similarProducts} />
    </div>
  );
};

export default ProductDetail;
