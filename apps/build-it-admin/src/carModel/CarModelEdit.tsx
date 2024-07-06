import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { PartTitle } from "../part/PartTitle";

export const CarModelEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="modelURL" source="modelUrl" />
        <TextInput label="name" source="name" />
        <ReferenceArrayInput
          source="parts"
          reference="Part"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={PartTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Edit>
  );
};
