import { ProductPrimitive, toProductPrimitive } from "@/src/app/types";
import { PrismaClient, Product as ProductType } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();
const fetchProducts = async (): Promise<ProductPrimitive[]> => {
  console.log("SERVER: get products");
  const res: ProductType[] = await prisma.product.findMany();
  return res.map(toProductPrimitive);
};

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const id = parseInt(searchParams.get("id") ?? "");

  if (id) {
    const res = await prisma.product.delete({
      where: {
        id: id,
      },
    });
    console.log(res);
  }

  return NextResponse.json({ data: "server" });
}

export const DELETE = async (req: Request) => {
  const { id }: Partial<ProductType> = await req.json();
  if (!id) return NextResponse.json({ error: "Missing id" });
  console.log("SERVER: delete product");
  await prisma.product.delete({
    where: { id: id },
  });
  return NextResponse.json({ message: `Product with ${id} deleted` });
};

export const POST = async (req: Request) => {
  const { name, price, description, image }: Partial<ProductPrimitive> =
    await req.json();
  if (!name || !price)
    return NextResponse.json({ error: "Missing required field" });
  const res: ProductType = await prisma.product.create({
    data: { name, price, description: description ?? "", image: image ?? "" },
  });
  return NextResponse.json(res);
};

export const deleteProduct = async (id: number): Promise<void> => {
  const res = await prisma.product.delete({ where: { id } });
  console.log(res);
};
