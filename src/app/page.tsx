import { PrismaClient } from "@prisma/client";
import { ProductPrimitive, toProductPrimitive } from "./types";
import Hero from "@/app/components/hero";
import Pricing from "@/app/components/pricing";
const prisma = new PrismaClient();

export default async function Home() {
  const productMapped: ProductPrimitive[] = (
    await prisma.product.findMany()
  ).map(toProductPrimitive);

  return (
    <main className="flex flex-col items-center justify-between">
      <Hero />
      <Pricing products={productMapped} />
    </main>
  );
}
