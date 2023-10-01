import Product from "@/components/product";
import { ProductPrimitive } from "./types";
import { fetchProducts } from "./api/products/route";

export default async function Home() {
  const productMapped: ProductPrimitive[] = await fetchProducts();
  // const res = ;

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {productMapped.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </main>
  );
}
