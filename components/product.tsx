"use client";

import Image from "next/image";
import { deleteProduct } from "./api";
import { Product as ProductType } from "@prisma/client";

interface ProductProps {
  product: ProductType;
  onDelete: () => void;
}

export default function Product({ product, onDelete }: ProductProps) {
  const { image, id, name, description, price } = product;

  const handleDelete = async () => {
    await deleteProduct(id);
    onDelete();
  };

  return (
    <div className="flex flex-col items-center justify-center w-[200] h-[200]">
      <Image src={image} alt={name} width={150} height={150} />
      <div>{name}</div>
      <div>{price.toString()}</div>
      <div>{description}</div>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
}
