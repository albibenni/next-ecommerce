import { Prisma } from "@prisma/client";

const seedProducts = [
  {
    name: "Cool helmet.",
    description: "A nice helmet to wear on your head",
    price: new Prisma.Decimal(19.95),
    image: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
  },
  {
    name: "Grey T-Shirt",
    description: "A nice shirt that you can wear on your body",
    price: new Prisma.Decimal(22.95),
    image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
  },
  {
    name: "Socks",
    description: "Cool socks that you can wear on your feet",
    price: new Prisma.Decimal(12.95),
    image:
      "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
  },
  {
    name: "Sweatshirt",
    description: "Cool sweatshirt that you can wear on your body",
    price: new Prisma.Decimal(12.95),
    image: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
  },
];

export default seedProducts;
