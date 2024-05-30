import { OpeningModelRepository } from "../../dataAccess/OpeningModelRepository";

export class GetOpeningModelUseCase {
  constructor(private openingModelRepository: OpeningModelRepository) {}

  async execute() {
    const openingModelList = await this.openingModelRepository.getAllOpeningModels();

    return openingModelList;
  }
}