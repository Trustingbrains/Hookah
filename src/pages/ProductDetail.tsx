// src/pages/ProductDetail.tsx
import { useParams } from "react-router-dom";
import ProductImage from "../components/ProductImage";
import ProductInfo from "../components/ProductInfo";
import OffersSection from "../components/OffersSection";
import ActionButtons from "../components/ActionButtons";
import SimilarProducts from "../components/SimilarProducts";
import { productList, Product } from "../data/products";
import { useCart } from "../components/CartContext"; // ✅ Import your CartContext hook

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const { addToCart } = useCart(); // ✅ Get real addToCart from context
  const product: Product | undefined = productList.find((p) => p.id === id);

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
        onAddToCart={addToCart}
      />
      <SimilarProducts products={similarProducts} />
    </div>
  );
};

export default ProductDetail;
