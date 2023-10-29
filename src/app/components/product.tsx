"use client";

import { ProductPrimitive } from "../types";
import clsx from "clsx";

interface ProductProps {
  product: ProductPrimitive;
}

export default function Product({ product }: ProductProps) {
  const { image, id, name, description, price } = product;
  const featured = name === "Premium";

  return (
    <section
      className={clsx(
        "flex flex-col rounded-3xl px-6 sm:px-8",
        featured ? "order-first bg-blue-600 py-8 lg:order-none" : "lg:py-8"
      )}
    >
      <p className="text-lg font-medium text-gray-800 ">{name}</p>
      <p className="text-gray-500 ">{description}</p>
      <p className="order-first font-display text-5xl font-light tracking-tight  text-gray-800">
        € {price}
      </p>
      <button className="w-full mt-auto px-4 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
        Choose plan
      </button>
    </section>
  );
}
