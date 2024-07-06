import { PartUpdateManyWithoutCarModelsInput } from "./PartUpdateManyWithoutCarModelsInput";

export type CarModelUpdateInput = {
  modelUrl?: string | null;
  name?: string | null;
  parts?: PartUpdateManyWithoutCarModelsInput;
};
