"use client";

import Product from "@/components/product";
import { ProductPrimitive } from "./types";
// import { fetchProducts } from "./api/products/route";
import { useEffect, useState } from "react";
import { Product as ProductType } from "@prisma/client";

export default function Home() {
  // const productMapped: ProductPrimitive[] = await fetchProducts();
  const [products, setProducts] = useState<ProductType[]>([]);
  const fetchProducts = () => {
    fetch(`http://localhost:3000/api/products/`, {
      method: "GET",
    })
      .then((r) => r.json())
      .then((data) => setProducts(data))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const onDelete = () => {
    fetchProducts();
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {products.map((product) => (
        <Product key={product.id} product={product} onDelete={onDelete} />
      ))}
    </main>
  );
}
