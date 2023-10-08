import Navbar from "@/components/navbar";
import "./globals.css";
import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import Footer from "@/components/footer";

const roboto = Roboto({ subsets: ["latin"], weight: "400" });

export const metadata: Metadata = {
  title: "Benni e-commerce",
  description: "My e-commerce website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
