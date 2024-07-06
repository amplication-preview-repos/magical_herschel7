import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  ReferenceArrayInput,
  SelectArrayInput,
  TextInput,
} from "react-admin";

import { CarModelTitle } from "../carModel/CarModelTitle";
import { ModificationTitle } from "../modification/ModificationTitle";

export const PartEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput
          source="carModel.id"
          reference="CarModel"
          label="CarModel"
        >
          <SelectInput optionText={CarModelTitle} />
        </ReferenceInput>
        <ReferenceArrayInput
          source="modifications"
          reference="Modification"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ModificationTitle} />
        </ReferenceArrayInput>
        <TextInput label="name" source="name" />
        <SelectInput
          source="typeField"
          label="type"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
      </SimpleForm>
    </Edit>
  );
};
