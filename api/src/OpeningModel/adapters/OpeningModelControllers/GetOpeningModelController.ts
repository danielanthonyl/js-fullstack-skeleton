import { Request, Response } from "express";
import { GetOpeningModelUseCase } from "../../domain/useCases/GetOpeningModelUseCase";
import { Answer } from "../../../utils/Answer";

export class GetOpeningModelsController {
  constructor(private getOpeningModelUseCase: GetOpeningModelUseCase) {}

  async handle(request: Request, response: Response) {
    try {
      const openingModelList = await this.getOpeningModelUseCase.execute();

      response.status(200).json(new Answer("listing opening models", openingModelList));
    } catch (error) {
      const { message } = error as Error;

      response.status(400).json(new Answer("Failed listing opening models", message || "unkwnown error"));
    }
  }
}
