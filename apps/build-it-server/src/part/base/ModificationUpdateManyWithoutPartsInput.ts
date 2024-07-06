/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ModificationWhereUniqueInput } from "../../modification/base/ModificationWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class ModificationUpdateManyWithoutPartsInput {
  @Field(() => [ModificationWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [ModificationWhereUniqueInput],
  })
  connect?: Array<ModificationWhereUniqueInput>;

  @Field(() => [ModificationWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [ModificationWhereUniqueInput],
  })
  disconnect?: Array<ModificationWhereUniqueInput>;

  @Field(() => [ModificationWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [ModificationWhereUniqueInput],
  })
  set?: Array<ModificationWhereUniqueInput>;
}

export { ModificationUpdateManyWithoutPartsInput as ModificationUpdateManyWithoutPartsInput };