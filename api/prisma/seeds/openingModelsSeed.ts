import { randomUUID } from "crypto";
import { prisma } from "../prisma";

const openings = [
  { type: "window", width: 2.0, height: 1.2, id: randomUUID() },
  { type: "door", width: 0.8, height: 1.9, id: randomUUID() },
];

export const openingModelsSeed = async () => {
  openings.forEach(async (opening) => {
    // DEBT: USE ENTITY
    const newOpening = opening;

    // DEBT: USE REPOSITORY
    await prisma.openingModel.create({ data: newOpening });
  });
};
