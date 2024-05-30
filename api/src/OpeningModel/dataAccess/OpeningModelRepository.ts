import { OpeningModelEntity } from "../domain/entities/OpeningModelEntity";
import { prisma } from "../../../prisma/prisma";

export class OpeningModelRepository {
  async createOpeningModel(openingModel: Omit<OpeningModelEntity, 'id'>) {
    const newOpeningModel = await prisma.openingModel.create({ data: new OpeningModelEntity(openingModel)});

    console.info(`creating new opening model with id: ${newOpeningModel.id}`);

    return newOpeningModel;
  }

  async getAllOpeningModels() {
    const openingModels = await prisma.openingModel.findMany();

    console.info(`got ${openingModels.length} opening models.`);

    return openingModels;
  }
}
