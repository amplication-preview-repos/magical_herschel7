import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { PartWhereUniqueInput } from "../part/PartWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ModificationWhereInput = {
  dateModified?: DateTimeNullableFilter;
  description?: StringNullableFilter;
  id?: StringFilter;
  part?: PartWhereUniqueInput;
  user?: UserWhereUniqueInput;
};
