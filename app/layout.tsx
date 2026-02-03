import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css"; // <--- ISSO AQUI QUE FAZ O CSS FUNCIONAR

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "PontoPe | Backend & AI Engineer",
  description: "Portfolio of Pedro Martins",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="no-scrollbar">
      <body className={inter.className}>{children}</body>
    </html>
  );
}