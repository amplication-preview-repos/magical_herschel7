import { CarModelWhereUniqueInput } from "../carModel/CarModelWhereUniqueInput";
import { ModificationUpdateManyWithoutPartsInput } from "./ModificationUpdateManyWithoutPartsInput";

export type PartUpdateInput = {
  carModel?: CarModelWhereUniqueInput | null;
  modifications?: ModificationUpdateManyWithoutPartsInput;
  name?: string | null;
  typeField?: "Option1" | null;
};
