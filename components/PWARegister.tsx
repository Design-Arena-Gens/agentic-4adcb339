\"use client\";
import { useEffect } from \"react\";
import { useCart } from \"@/lib/cart\";

export default function PWARegister() {
  const { itemsCount } = useCart();

  useEffect(() => {
    const el = document.getElementById(\"cart-count\");
    if (el) {
      if (itemsCount > 0) {
        el.style.display = \"inline-block\";
        el.textContent = String(itemsCount);
      } else {
        el.style.display = \"none\";
      }
    }
  }, [itemsCount]);

  useEffect(() => {
    if (typeof window === \"undefined\") return;
    if (\"serviceWorker\" in navigator) {
      navigator.serviceWorker
        .register(\"/sw.js\")
        .catch(() => {
          // ignore
        });
    }
  }, []);
  return null;
}

