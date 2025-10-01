import { PrismaClient } from "../generated/prisma/index.js";

const prisma = new PrismaClient();

async function main() {
  const result = await prisma.user.create({
    data: {
      name: "Khalid Saifullaha",
      email: "khalid@gmail.com",
      profilePhoto: "https://khalid.cpm/khalid.png",
    },
  });
  console.log(result);
}

main();
