import { ModificationCreateNestedManyWithoutUsersInput } from "./ModificationCreateNestedManyWithoutUsersInput";
import { InputJsonValue } from "../../types";

export type UserCreateInput = {
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  modifications?: ModificationCreateNestedManyWithoutUsersInput;
  password: string;
  roles: InputJsonValue;
  username: string;
};
