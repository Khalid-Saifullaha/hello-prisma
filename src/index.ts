import { PrismaClient } from "../generated/prisma/index.js";

const prisma = new PrismaClient();

async function main() {
  // const result = await prisma.user.create({
  //   data: {
  //     name: "Khalid Saifullaha",
  //     email: "khalid@gmail.com",
  //     // profilePhoto: "https://khalid.cpm/khalid.png",
  //   },
  // });
  // console.log(result);

  // const usersData = await prisma.user.findMany({
  //   where: {
  //     id: 2,
  //   },
  // });
  // console.log(usersData);

  // const usersData = await prisma.user.findMany();
  // console.log(usersData);

  //   const findUserById = await prisma.user.findUnique({
  //     where: {
  //       id: 2,
  //     },
  //   });
  //   console.log(findUserById);

  // const updatedUser = await prisma.user.update({
  //   where: {
  //     id: 1,
  //   },
  //   data: {
  //     name: "Khalid",
  //   },
  // });

  // console.log(updatedUser);

  const updateProfilePhoto = await prisma.user.updateManyAndReturn({
    where: {
      profilePhoto: null,
    },
    data: {
      profilePhoto: "https://khalid.cpm/defult.png",
    },
  });
  console.log(updateProfilePhoto);
}

main();
