"use client";

import { ProductPrimitive } from "@/app/page";
import Image from "next/image";

interface ProductProps {
  product: ProductPrimitive;
}

export default function Product({ product }: ProductProps) {
  const { image, id, name, description, price } = product;
  const deleteProduct = async () => {
    await fetch(`/api/delete-product/${id}`);
    console.log("deleted product"); //! remove
  };

  return (
    <div className="flex flex-col items-center justify-center w-[200] h-[200]">
      <Image src={image} alt={name} width={150} height={150} />
      <div>{name}</div>
      <div>{price}</div>
      <div>{description}</div>
      <button onClick={deleteProduct}>Delete</button>
    </div>
  );
}
