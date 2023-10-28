"use client";

import Image from "next/image";
import { ProductPrimitive } from "@/src/app/types";

interface ProductProps {
  product: ProductPrimitive;
}

export default function Product({ product }: ProductProps) {
  const { image, id, name, description, price } = product;

  return (
    <div className="grid row-span-1 grid-rows-5 gap-0 justify-center text-center px-6 py-4 transition-colors duration-300 transform rounded-lg hover:bg-gray-300 border-2 border-red-500">
      <p className="text-lg font-medium text-gray-800 ">{name}</p>
      <Image
        className="mx-auto my-auto"
        src={image}
        alt={name}
        width={150}
        height={150}
      />
      <h4 className="text-4xl font-semibold text-gray-800 ">${price}</h4>
      <p className="text-gray-500 ">{description}</p>
      <button className="w-full mt-auto px-4 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
        Choose plan
      </button>
    </div>
  );
}
