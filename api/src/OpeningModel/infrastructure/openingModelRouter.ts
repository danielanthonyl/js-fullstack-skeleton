import express from "express";
import { GetOpeningModelsController } from "../adapters/OpeningModelControllers/GetOpeningModelController";
import { GetOpeningModelUseCase } from "../domain/useCases/GetOpeningModelUseCase";
import { OpeningModelRepository } from "../dataAccess/OpeningModelRepository";

const openingModelRouter = express.Router();

const openingModelRepository = new OpeningModelRepository();
const getOpeningModelUseCase = new GetOpeningModelUseCase(openingModelRepository);
const getOpeningModelsController = new GetOpeningModelsController(getOpeningModelUseCase);

openingModelRouter.get("/opening-model", (request, response) => {
  getOpeningModelsController.handle(request, response);
});

export { openingModelRouter };
