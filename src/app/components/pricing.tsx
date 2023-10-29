"use client";

import { ProductPrimitive } from "../types";
import Product from "./product";

interface ProductProps {
  products: ProductPrimitive[];
}
//! TODO: Add delete functionality -- Login

export default function Pricing({ products }: ProductProps) {
  return (
    <section
      id="pricing"
      aria-label="Pricing"
      className="bg-slate-900 py-20 sm:py-32"
    >
      <div className="container px-6 py-8 mx-auto">
        <div className="sm:flex sm:items-center sm:justify-between">
          <div>
            <h2 className="text-3xl font-bold text-gray-800">
              Simple, transparent pricing
            </h2>
            <p className="mt-4 text-gray-500 ">No surprise fees.</p>
          </div>
        </div>
        <div className="-mx-4 mt-16 grid max-w-2xl grid-cols-1 gap-y-10 sm:mx-auto lg:-mx-8 lg:max-w-none lg:grid-cols-3 xl:mx-0 xl:gap-x-8">
          {products?.map((product) => (
            <Product product={product} key={product.id} />
          ))}
        </div>
      </div>
    </section>
  );
}
