import { Prisma, Product } from "@prisma/client";

const seedProducts: Partial<Product>[] = [
  {
    name: "Cool helmet.",
    description: "A nice helmet to wear on your head",
    price: new Prisma.Decimal(19.95),
    // name: "Basic",
    // description: "Our basic product",
    // price: new Prisma.Decimal(19.99),
    image: "/images/helmet.jpg",
    stripePriceId: "price_1O2cHRAFbX2cbGKDYng6dpzV",
  },
  {
    name: "Grey T-Shirt",
    description: "A nice shirt that you can wear on your body",
    price: new Prisma.Decimal(22.95),
    // name: "Premium",
    // description: "A premium version of our product",
    // price: new Prisma.Decimal(29.99),
    image: "/images/shirt.jpg",
  },
  {
    name: "Socks",
    description: "Cool socks that you can wear on your feet",
    price: new Prisma.Decimal(12.95),
    image: "/images/socks.jpg",
  },
  {
    name: "Sweatshirt",
    description: "Cool sweatshirt that you can wear on your body",
    price: new Prisma.Decimal(12.95),
    image: "/images/sweatshirt.jpg",
    stripePriceId: "price_1O2fDNAFbX2cbGKDiZL7foDW",
  },
];

export default seedProducts;
