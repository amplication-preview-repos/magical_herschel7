import { Part } from "../part/Part";
import { User } from "../user/User";

export type Modification = {
  createdAt: Date;
  dateModified: Date | null;
  description: string | null;
  id: string;
  part?: Part | null;
  updatedAt: Date;
  user?: User | null;
};
