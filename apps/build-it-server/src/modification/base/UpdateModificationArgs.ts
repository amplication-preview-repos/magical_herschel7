/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { ModificationWhereUniqueInput } from "./ModificationWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { ModificationUpdateInput } from "./ModificationUpdateInput";

@ArgsType()
class UpdateModificationArgs {
  @ApiProperty({
    required: true,
    type: () => ModificationWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => ModificationWhereUniqueInput)
  @Field(() => ModificationWhereUniqueInput, { nullable: false })
  where!: ModificationWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => ModificationUpdateInput,
  })
  @ValidateNested()
  @Type(() => ModificationUpdateInput)
  @Field(() => ModificationUpdateInput, { nullable: false })
  data!: ModificationUpdateInput;
}

export { UpdateModificationArgs as UpdateModificationArgs };
