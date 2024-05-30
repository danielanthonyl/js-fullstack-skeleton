import { OpeningModelRepository } from "../../dataAccess/OpeningModelRepository";
import { GetOpeningModelUseCase } from "./GetOpeningModelUseCase";

describe("Opening Model Use Case", () => {
  test("should execute correctly", async () => {
    const openingModelRespository = new OpeningModelRepository();
    const getOpeningModelUseCase = new GetOpeningModelUseCase(openingModelRespository);

    const openingModelList = await getOpeningModelUseCase.execute();

    expect(openingModelList.length).toBe(1);
  });
});
