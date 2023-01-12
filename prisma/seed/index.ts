import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const main = async () => {
  await prisma.user.deleteMany({});
  await prisma.question.deleteMany({});

  await Promise.all(
    Array.from({ length: 5 }, (_, i) => {
      return prisma.user.create({
        data: {
          name: `Team ${i + 1}`,
          code: `CODE${i + 1}`,
        },
      });
    })
  );
  await Promise.all(
    Array.from({ length: 6 }, (_, i) => {
      return prisma.question.create({
        data: {
          question: `This is Question ${i + 1}`,
          answer: `This is Answer ${i + 1}`,
          password: `PASSWORD${i + 1}`,
          location: `LOCATION${i + 1}`,
          sequence: i + 1,
        },
      });
    })
  );
};

main()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
