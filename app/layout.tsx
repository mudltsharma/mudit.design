import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mudit Sharma — Design Leader",
  description: "Design leader with 12+ years scaling products across India, Southeast Asia, and Africa.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
