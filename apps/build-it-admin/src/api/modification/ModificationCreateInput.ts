import { PartWhereUniqueInput } from "../part/PartWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ModificationCreateInput = {
  dateModified?: Date | null;
  description?: string | null;
  part?: PartWhereUniqueInput | null;
  user?: UserWhereUniqueInput | null;
};
