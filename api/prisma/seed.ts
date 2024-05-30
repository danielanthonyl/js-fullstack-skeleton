import { prisma } from "./prisma";
import { openingModelsSeed } from "./seeds/openingModelsSeed";
import { paintCansSeed } from "./seeds/paintCansSeed";

try {
  await paintCansSeed();
  await openingModelsSeed();

  const paintCanCount = await prisma.paintCan.count();
  const openingModelCount = await prisma.openingModel.count();

  console.info(`seed complete! ${paintCanCount + openingModelCount} items seeded.`);
  process.exit(0);
} catch (error) {
  console.error(`An error occured during seed: \n ${error?.message}`);
  process.exit(1);
} finally {
  await prisma.$disconnect();
}
