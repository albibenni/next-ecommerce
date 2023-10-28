import { Product as ProductType } from "@prisma/client";

export type ProductPrimitive = {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
};

export const toProductPrimitive = (product: ProductType): ProductPrimitive => ({
  id: product.id,
  name: product.name,
  description: product.description,
  price: product.price.toNumber(),
  image: product.image,
});
