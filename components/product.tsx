"use client";

import Image from "next/image";
import { deleteProduct } from "./api";
import { ProductPrimitive } from "@/app/types";

interface ProductProps {
  product: ProductPrimitive;
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
      <div className="text-center">{description}</div>
      <button
        className=" border-solid rounded p-1 border-2 border-slate-400 bg-slate-200 text-black"
        onClick={handleDelete}
      >
        Delete
      </button>
    </div>
  );
}
