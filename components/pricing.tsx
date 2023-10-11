"use client";

import Product from "./product";
import { ProductPrimitive } from "@/app/types";

interface ProductProps {
  products: ProductPrimitive[];
}
//! TODO: Add delete functionality -- Login

export default function Pricing({ products }: ProductProps) {
  return (
    <section className="bg-white w-full">
      <div className="container px-6 py-8 mx-auto">
        <div className="sm:flex sm:items-center sm:justify-between">
          <div>
            <h2 className="text-3xl font-bold text-gray-800">
              Simple, transparent pricing
            </h2>
            <p className="mt-4 text-gray-500 ">No surprise fees.</p>
          </div>
        </div>
        {/* gap-6 mt-16 -mx-6 */}
        <div className="grid sm:gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {products?.map((product) => (
            <Product product={product} key={product.id} />
          ))}
        </div>
      </div>
    </section>
  );
}
