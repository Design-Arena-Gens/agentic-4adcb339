import Link from "next/link";
import type { Product } from "@/lib/products";
import { useCart } from "@/lib/cart";

export default function ProductCard({ product }: { product: Product }) {
  const { addToCart } = useCart();
  return (
    <div className="card">
      <Link href={`/product/${product.id}`}>
        <img src={product.imageUrl} alt={product.title} />
      </Link>
      <div className="card-body">
        <div className="between">
          <Link href={`/product/${product.id}`}><strong>{product.title}</strong></Link>
          <span className="price">{product.price.toFixed(2)} ?.?</span>
        </div>
        <span className="muted">{product.category}</span>
        <button className="btn" onClick={() => addToCart(product, 1)}>??? ??? ?????</button>
      </div>
    </div>
  );
}

