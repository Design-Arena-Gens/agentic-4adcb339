"use client";
import { useCart } from "@/lib/cart";
import { useState } from "react";
import Link from "next/link";

export default function CheckoutPage() {
  const { items, total, clearCart } = useCart();
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 800));
    setSubmitted(true);
    clearCart();
    setLoading(false);
  };

  if (items.length === 0 && !submitted) {
    return (
      <div className="stack" style={{ gap: "1rem" }}>
        <h1>????? ??????</h1>
        <p>???? ?????.</p>
        <Link className="btn" href="/">?????? ??????</Link>
      </div>
    );
  }

  if (submitted) {
    return (
      <div className="stack" style={{ gap: "1rem", alignItems: "center", textAlign: "center" }}>
        <h1>?? ????? ????? ?</h1>
        <p>????? ?????? ????! ????? ????? ????? ??????.</p>
        <Link className="btn" href="/">?????? ?????? ????????</Link>
      </div>
    );
  }

  return (
    <div className="stack" style={{ gap: "1rem" }}>
      <h1>????? ??????</h1>
      <div className="stack" style={{ gap: ".5rem" }}>
        <strong>???? ?????</strong>
        <span className="muted">??? ???????: {items.reduce((s, i) => s + i.quantity, 0)}</span>
        <strong>???????: {total.toFixed(2)} ?.?</strong>
      </div>
      <form className="stack" style={{ gap: ".75rem" }} onSubmit={onSubmit}>
        <div className="grid" style={{ gridTemplateColumns: "repeat(1, minmax(0, 1fr))" }}>
          <input required placeholder="????? ??????" style={inputStyle} />
          <input required type="tel" placeholder="??? ??????" style={inputStyle} />
          <input required type="email" placeholder="?????? ??????????" style={inputStyle} />
          <input required placeholder="???????" style={inputStyle} />
          <input placeholder="???????" style={inputStyle} />
          <input placeholder="????? ???????" style={inputStyle} />
        </div>
        <button className="btn" disabled={loading}>{loading ? "???? ?????????" : "????? ?????"}</button>
      </form>
    </div>
  );
}

const inputStyle: React.CSSProperties = {
  padding: "0.7rem 0.9rem",
  borderRadius: 10,
  border: "1px solid #e5e7eb",
  width: "100%"
};

