import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

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

export async function POST() {
  console.log("SERVER");

  return NextResponse.json({ data: "server" });
}

export async function DELETE() {}
