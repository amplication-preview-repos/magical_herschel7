import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  DateTimeInput,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { PartTitle } from "../part/PartTitle";
import { UserTitle } from "../user/UserTitle";

export const ModificationEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <DateTimeInput label="dateModified" source="dateModified" />
        <TextInput label="description" multiline source="description" />
        <ReferenceInput source="part.id" reference="Part" label="Part">
          <SelectInput optionText={PartTitle} />
        </ReferenceInput>
        <ReferenceInput source="user.id" reference="User" label="User">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
