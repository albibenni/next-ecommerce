import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import { Product as ProductType } from "@prisma/client";
import { ProductPrimitive, toProductPrimitive } from "../types";

const prisma = new PrismaClient();

export async function fetchProducts(): Promise<ProductPrimitive[]> {
  "use server";
  console.log("SERVER: get data from db");
  const res: ProductType[] = await prisma.product.findMany();
  return res.map(toProductPrimitive);
}

export async function deleteProduct(id: string) {
  console.log("SERVER");

  return NextResponse.json({ data: "server" });
}
