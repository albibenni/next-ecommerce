"use client";

import { ProductPrimitive } from "@/app/types";
import { deleteProduct } from "./api";

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
    <div className="px-6 py-4 transition-colors duration-200 transform rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700">
      <p className="text-lg font-medium text-gray-800 dark:text-gray-100">
        {name}
      </p>
      <h4 className="mt-2 text-4xl font-semibold text-gray-800 dark:text-gray-100">
        ${price}
      </h4>
      <p className="mt-4 text-gray-500 dark:text-gray-300">{description}</p>
      <div className="flex flex-row gap-1">
        <button className="w-full px-4 py-2 mt-10 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
          Choose plan
        </button>
        <button
          className="w-full px-4 py-2 mt-10 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-gray-700 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
          onClick={handleDelete}
        >
          Delete
        </button>
      </div>
    </div>
  );
}
