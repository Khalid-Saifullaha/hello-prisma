import { PrismaClient } from "../generated/prisma/index.js";

const prisma = new PrismaClient();

async function main() {
  // const result = await prisma.user.create({
  //   data: {
  //     name: "Khalid Saifullaha",
  //     email: "khalid@gmail.com",
  //     profilePhoto: "https://khalid.cpm/khalid.png",
  //   },
  // });
  // console.log(result);

  // const usersData = await prisma.user.findMany({
  //   where: {
  //     id: 2,
  //   },
  // });
  // console.log(usersData);

  const findUserById = await prisma.user.findUnique({
    where: {
      id: 2,
    },
  });
  console.log(findUserById);
}

main();
