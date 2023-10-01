"use client";

import { ProductPrimitive } from "@/app/types";
import Image from "next/image";
import { deleteProduct } from "./api";

interface ProductProps {
  product: ProductPrimitive;
}

export default function Product({ product }: ProductProps) {
  const { image, id, name, description, price } = product;

  return (
    <div className="flex flex-col items-center justify-center w-[200] h-[200]">
      <Image src={image} alt={name} width={150} height={150} />
      <div>{name}</div>
      <div>{price}</div>
      <div>{description}</div>
      <button onClick={() => deleteProduct(id)}>Delete</button>
    </div>
  );
}
