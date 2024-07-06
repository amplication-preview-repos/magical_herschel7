import { SortOrder } from "../../util/SortOrder";

export type ModificationOrderByInput = {
  createdAt?: SortOrder;
  dateModified?: SortOrder;
  description?: SortOrder;
  id?: SortOrder;
  partId?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
