\"use client\";
import { useCart } from \"@/lib/cart\";
import Link from \"next/link\";

export default function CartPage() {
  const { items, total, removeFromCart, updateQuantity, clearCart } = useCart();

  return (
    <div className=\"stack\" style={{ gap: \"1rem\" }}>
      <div className=\"between\">
        <h1>?????</h1>
        <Link href=\"/\" className=\"muted\">?????? ??????</Link>
      </div>
      {items.length === 0 ? (
        <p>????? ?????.</p>
      ) : (
        <>
          <div className=\"stack\" style={{ gap: \".75rem\" }}>
            {items.map((item) => (
              <div key={item.product.id} className=\"between\" style={{ border: \"1px solid #e5e7eb\", borderRadius: 10, padding: \".75rem\" }}>
                <div className=\"row\" style={{ gap: \".75rem\" }}>
                  <img src={item.product.imageUrl} alt={item.product.title} style={{ width: 72, height: 72, objectFit: \"cover\", borderRadius: 8 }} />
                  <div className=\"stack\">
                    <strong>{item.product.title}</strong>
                    <span className=\"muted\">{item.product.price.toFixed(2)} ?.?</span>
                  </div>
                </div>
                <div className=\"row\">
                  <button className=\"btn\" onClick={() => updateQuantity(item.product.id, Math.max(0, item.quantity - 1))}>-</button>
                  <span style={{ minWidth: 24, textAlign: \"center\" }}>{item.quantity}</span>
                  <button className=\"btn\" onClick={() => updateQuantity(item.product.id, item.quantity + 1)}>+</button>
                  <button className=\"btn\" onClick={() => removeFromCart(item.product.id)} style={{ background: \"#ef4444\" }}>???</button>
                </div>
              </div>
            ))}
          </div>
          <div className=\"between\" style={{ marginTop: \".5rem\" }}>
            <strong>???????: {total.toFixed(2)} ?.?</strong>
            <div className=\"row\">
              <button className=\"btn\" onClick={clearCart} style={{ background: \"#6b7280\" }}>?????</button>
              <Link href=\"/checkout\" className=\"btn\">????? ??????</Link>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

