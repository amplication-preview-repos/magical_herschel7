import { PartCreateNestedManyWithoutCarModelsInput } from "./PartCreateNestedManyWithoutCarModelsInput";

export type CarModelCreateInput = {
  modelUrl?: string | null;
  name?: string | null;
  parts?: PartCreateNestedManyWithoutCarModelsInput;
};
