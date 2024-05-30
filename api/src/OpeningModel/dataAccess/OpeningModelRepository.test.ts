import { OpeningModelRepository } from "./OpeningModelRepository"

describe('Opening Model Repository', () => {
  test('should create opening model correctly', async () => {
    const openingModelRepository= new OpeningModelRepository();

    const newOpeningModel = await openingModelRepository.createOpeningModel({height: 1, type: 'door', width: 1});

    expect(newOpeningModel).not.toBeNull();
  })

  test('should list opening model correctly', async () => {
    const openingModelRepository= new OpeningModelRepository();

    const newOpeningModel = await openingModelRepository.getAllOpeningModels();

    expect(newOpeningModel).not.toBeNull();
  })
})