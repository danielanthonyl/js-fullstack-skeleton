import { randomUUID } from "crypto";
import { OpeningTypes } from "../../../types/OpeningTypes";

export type OpeningModelParams = {
  width: number;
  height: number;
  type: OpeningTypes;
};

export class OpeningModelEntity {
  id: string;
  width: number;
  height: number;
  type: OpeningTypes;

  constructor({ height, type, width }: OpeningModelParams) {
    this.id = randomUUID();
    this.height = height;
    this.width = width;
    this.type = type;
  }
}
