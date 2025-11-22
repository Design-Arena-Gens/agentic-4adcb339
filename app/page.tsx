import ProductCard from "@/components/ProductCard";
import { products } from "@/lib/products";

export default function HomePage() {
  return (
    <div className="stack" style={{ gap: "1rem" }}>
      <div className="between">
        <h1>???? ??????</h1>
        <span className="muted">??? ????????: {products.length}</span>
      </div>
      <div className="grid">
        {products.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </div>
  );
}

