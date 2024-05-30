import { Request, Response } from "express"
import { OpeningModelRepository } from "../../dataAccess/OpeningModelRepository"
import { GetOpeningModelUseCase } from "../../domain/useCases/GetOpeningModelUseCase"
import { GetOpeningModelsController } from "./GetOpeningModelController"
import { Answer } from "../../../utils/Answer"
import openingModelEntityMock from '../../../mocks/openingModelEntity.json'

describe('Opening Model Controller', () => {
  test('should run controller correctly', async () => {
    const request = jest.fn()
    const jsonFn = jest.fn()
    const response = {
      status: () => ({json: jsonFn}),
    }

    const openingModelRespository = new OpeningModelRepository();
    const getOpeningModelUseCase = new GetOpeningModelUseCase(openingModelRespository);
    const getOpeningModelController = new GetOpeningModelsController(getOpeningModelUseCase); 

   await getOpeningModelController.handle(request as unknown as Request, response as unknown as Response); 

   expect(jsonFn).toHaveBeenCalledWith(new Answer("listing opening models", [openingModelEntityMock]));
  })
})