import Product from "@/components/product";
import { PrismaClient } from "@prisma/client";
import { Product as ProductType } from "@prisma/client";
const prisma = new PrismaClient();

export type ProductPrimitive = {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
};

export default async function Home() {
  const products: ProductType[] = await prisma.product.findMany();
  const productMapped: ProductPrimitive[] = products.map((product) => ({
    id: product.id,
    name: product.name,
    description: product.description,
    price: product.price.toNumber(),
    image: product.image,
  }));

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {productMapped.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </main>
  );
}
