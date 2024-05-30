import { OpeningModelEntity, OpeningModelParams } from "./OpeningModelEntity";

describe("Opening Model Entity", () => {
  test("should create entity correctly", () => {
    const entityParams: OpeningModelParams = { height: 1, type: "door", width: 1 };
    const newEntity = new OpeningModelEntity(entityParams);

    expect(newEntity.height).toBe(entityParams.height);
    expect(newEntity.width).toBe(entityParams.width);
    expect(newEntity.type).toBe(entityParams.type);
    expect(newEntity.id).not.toBeNull();
  });
});
