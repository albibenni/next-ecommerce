import { ProductPrimitive, toProductPrimitive } from "@/app/types";
import CartProduct from "@/components/cart-product";
import { PrismaClient } from "@prisma/client";

//! TODO: Add delete functionality -- Login

export default async function Home() {
  const prisma = new PrismaClient();

  const productMapped: ProductPrimitive[] = (
    await prisma.product.findMany()
  ).map(toProductPrimitive);

  return (
    <section className="bg-white w-full">
      <div className="container px-6 py-8 mx-auto">
        <div className="sm:flex sm:items-center sm:justify-between">
          <div>
            <h2 className="text-3xl font-bold text-gray-800">Admin Panel</h2>
          </div>
        </div>
        <div className="grid gap-6 mt-8 -mx-6 sm:gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {productMapped?.map((product) => (
            <CartProduct product={product} key={product.id} />
          ))}
        </div>
      </div>
    </section>
  );
}
