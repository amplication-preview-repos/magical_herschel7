import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { PartListRelationFilter } from "../part/PartListRelationFilter";

export type CarModelWhereInput = {
  id?: StringFilter;
  modelUrl?: StringNullableFilter;
  name?: StringNullableFilter;
  parts?: PartListRelationFilter;
};
