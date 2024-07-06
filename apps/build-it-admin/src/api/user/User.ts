import { Modification } from "../modification/Modification";
import { JsonValue } from "type-fest";

export type User = {
  createdAt: Date;
  email: string | null;
  firstName: string | null;
  id: string;
  lastName: string | null;
  modifications?: Array<Modification>;
  roles: JsonValue;
  updatedAt: Date;
  username: string;
};
