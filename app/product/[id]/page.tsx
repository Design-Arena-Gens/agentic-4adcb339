import { getProductById } from "@/lib/products";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { products } from "@/lib/products";
import { Suspense } from "react";
import AddToCart from "./sections/AddToCart";

type Props = { params: { id: string } };

export function generateStaticParams() {
  return products.map((p) => ({ id: p.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const product = getProductById(params.id);
  if (!product) return { title: "?????? ??? ?????" };
  return {
    title: product.title,
    description: product.description
  };
}

export default function ProductPage({ params }: Props) {
  const product = getProductById(params.id);
  if (!product) notFound();
  return (
    <div className="stack" style={{ gap: "1rem" }}>
      <img src={product.imageUrl} alt={product.title} style={{ width: "100%", maxHeight: 420, objectFit: "cover", borderRadius: 12 }} />
      <div className="between">
        <h1>{product.title}</h1>
        <strong className="price">{product.price.toFixed(2)} ?.?</strong>
      </div>
      <span className="muted">{product.category}</span>
      <p>{product.description}</p>
      <Suspense fallback={<button className="btn" disabled>???? ????????</button>}>
        <AddToCart productId={product.id} />
      </Suspense>
    </div>
  );
}

