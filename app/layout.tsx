import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";
import { CartProvider } from "@/lib/cart";
import PWARegister from "@/components/PWARegister";

export const metadata: Metadata = {
  title: "???? ????????",
  description: "????? ???? ????? ?????? ??? ???????",
  manifest: "/manifest.json",
  themeColor: "#111827",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ar" dir="rtl">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#111827" />
      </head>
      <body>
        <CartProvider>
          <header className="header">
            <nav className="nav container">
              <Link href="/" className="brand">
                <span className="brand-badge" />
                <span>??????</span>
              </Link>
              <div className="row">
                <Link href="/cart" className="cart-link">
                  ?? ?????
                  <span id="cart-count" className="cart-count" style={{ display: "none" }}>0</span>
                </Link>
              </div>
            </nav>
          </header>
          <main className="container">{children}</main>
          <PWARegister />
        </CartProvider>
      </body>
    </html>
  );
}

