\"use client\";
import { useCart } from \"@/lib/cart\";
import { getProductById } from \"@/lib/products\";

export default function AddToCart({ productId }: { productId: string }) {
  const { addToCart } = useCart();
  const product = getProductById(productId);
  if (!product) return null;
  return (
    <button className=\"btn\" onClick={() => addToCart(product, 1)}>
      ??? ??? ?????
    </button>
  );
}

