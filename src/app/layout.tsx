import "./globals.css";
import type { Metadata } from "next";
import { Russo_One } from "next/font/google";

const inter = Russo_One({ subsets: ["latin"], weight: "400" });

export const metadata: Metadata = {
  title: "Blockchain Solutions",
  description: "",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
