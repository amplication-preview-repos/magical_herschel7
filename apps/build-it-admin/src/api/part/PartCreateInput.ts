import { CarModelWhereUniqueInput } from "../carModel/CarModelWhereUniqueInput";
import { ModificationCreateNestedManyWithoutPartsInput } from "./ModificationCreateNestedManyWithoutPartsInput";

export type PartCreateInput = {
  carModel?: CarModelWhereUniqueInput | null;
  modifications?: ModificationCreateNestedManyWithoutPartsInput;
  name?: string | null;
  typeField?: "Option1" | null;
};
