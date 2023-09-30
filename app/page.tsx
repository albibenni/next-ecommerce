import Product from "@/components/product";
import { fetchProducts } from "./backend/route";
import { ProductPrimitive } from "./types";

export default async function Home() {
  const productMapped: ProductPrimitive[] = await fetchProducts();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {productMapped.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </main>
  );
}
