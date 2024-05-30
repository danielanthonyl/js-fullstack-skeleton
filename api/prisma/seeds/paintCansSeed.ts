import { randomUUID } from "crypto";
import { prisma } from "../prisma";

const paintCans = [
  { size: "s", liters: 0.5, id: randomUUID() },
  { size: "m", liters: 2.5, id: randomUUID() },
  { size: "l", liters: 3.6, id: randomUUID() },
  { size: "xl", liters: 18, id: randomUUID() },
];

export const paintCansSeed = async () => {
  paintCans.forEach(async (paintCan) => {
    // DEBT: USE ENTITY
    const newPaintCan = paintCan;

    // DEBT: USE REPOSITORY
    await prisma.paintCan.create({ data: newPaintCan });
  });
};
