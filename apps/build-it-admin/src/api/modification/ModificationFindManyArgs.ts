import { ModificationWhereInput } from "./ModificationWhereInput";
import { ModificationOrderByInput } from "./ModificationOrderByInput";

export type ModificationFindManyArgs = {
  where?: ModificationWhereInput;
  orderBy?: Array<ModificationOrderByInput>;
  skip?: number;
  take?: number;
};
