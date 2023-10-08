import Product from "@/components/product";
import { ProductPrimitive, toProductPrimitive } from "./types";
import { useEffect, useState } from "react";
import { PrismaClient, Product as ProductType } from "@prisma/client";
import Hero from "@/components/hero";
import Pricing from "@/components/pricing";
const prisma = new PrismaClient();

export default async function Home() {
  const productMapped: ProductPrimitive[] = (
    await prisma.product.findMany()
  ).map(toProductPrimitive);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Hero />
      <Pricing products={productMapped} />
    </main>
  );
}
