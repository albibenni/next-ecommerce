import Product from "@/components/product";
import { PrismaClient } from "@prisma/client";
import { Product as ProductType } from "@prisma/client";

const prisma = new PrismaClient();
export default async function Home() {
  const products: ProductType[] = await prisma.product.findMany();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {products.map((product) => (
        <Product key={product.id} name={product.name} id={product.id} />
      ))}
    </main>
  );
}
