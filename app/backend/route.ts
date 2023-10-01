import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import { Product as ProductType } from "@prisma/client";
import { ProductPrimitive, toProductPrimitive } from "../types";

const prisma = new PrismaClient();

export async function fetchProducts(): Promise<ProductPrimitive[]> {
  console.log("SERVER: get products");
  const res: ProductType[] = await prisma.product.findMany();
  return res.map(toProductPrimitive);
}

export async function createProduct(
  product: ProductPrimitive
): Promise<ProductPrimitive> {
  console.log("SERVER: create");
  const res: ProductType = await prisma.product.create({
    data: {
      name: product.name,
      price: product.price,
      description: product.description,
      image: product.image,
    },
  });
  return toProductPrimitive(res);
}

export async function deleteProduct(id: string) {
  console.log("SERVER");

  return NextResponse.json({ data: "server" });
}
