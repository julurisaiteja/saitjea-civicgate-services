import type { Metadata } from "next";
import { CartProvider } from "@/components/CartProvider";
import { Shell } from "@/components/Shell";
import "./globals.css";

export const metadata: Metadata = {
  title: "CivicGate — Gov Swiss Clarity",
  description: "Citizen services that feel clear, calm, and accountable.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Source+Serif+4:opsz,wght@8..60,400;8..60,600;8..60,700&family=Public+Sans:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body>
        <CartProvider>
          <Shell>{children}</Shell>
        </CartProvider>
      </body>
    </html>
  );
}
