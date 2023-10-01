import { ProductPrimitive, toProductPrimitive } from "@/app/types";
import { PrismaClient, Product as ProductType } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();
export const fetchProducts = async (): Promise<ProductPrimitive[]> => {
  console.log("SERVER: get products");
  const res: ProductType[] = await prisma.product.findMany();
  return res.map(toProductPrimitive);
};

export const GET = async () => {
  console.log("SERVER: get products");
  return NextResponse.json(await fetchProducts());
};

export const DELETE = async (req: Request) => {
  const { id }: Partial<ProductType> = await req.json();
  if (!id) return NextResponse.json({ error: "Missing id" });
  console.log("SERVER: delete product");
  await prisma.product.delete({
    where: { id },
  });
  return NextResponse.json({ message: `Product with ${id} deleted` });
};

export const createProduct = async (
  product: ProductPrimitive
): Promise<ProductPrimitive> => {
  console.log("SERVER: create product");
  const res: ProductType = await prisma.product.create({
    data: {
      name: product.name,
      price: product.price,
      description: product.description,
      image: product.image,
    },
  });
  return toProductPrimitive(res);
};

export const deleteProduct = async (id: number): Promise<void> => {
  const res = await prisma.product.delete({ where: { id } });
  console.log(res);
};
