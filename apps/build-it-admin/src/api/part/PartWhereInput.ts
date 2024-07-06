import { CarModelWhereUniqueInput } from "../carModel/CarModelWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { ModificationListRelationFilter } from "../modification/ModificationListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type PartWhereInput = {
  carModel?: CarModelWhereUniqueInput;
  id?: StringFilter;
  modifications?: ModificationListRelationFilter;
  name?: StringNullableFilter;
  typeField?: "Option1";
};
