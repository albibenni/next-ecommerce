const { PrismaClient } = require("@prisma/client");
const { products } = require("./data.ts");

const prisma = new PrismaClient();

const load = async () => {
  try {
    await prisma.product.deleteMany();
    console.log("Deleted records in product table");

    await prisma.$queryRaw`ALTER TABLE Product AUTO_INCREMENT = 1`;
    console.log("reset product auto increment to 1");

    await prisma.$queryRaw`ALTER TABLE Category AUTO_INCREMENT = 1`;
    console.log("reset category auto increment to 1");

    await prisma.product.createMany({
      data: products,
    });
    console.log("Added product data");
  } catch (e) {
    console.error(e);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
};

load();
