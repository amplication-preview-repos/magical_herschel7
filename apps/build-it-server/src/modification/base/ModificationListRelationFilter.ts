/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { ModificationWhereInput } from "./ModificationWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class ModificationListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => ModificationWhereInput,
  })
  @ValidateNested()
  @Type(() => ModificationWhereInput)
  @IsOptional()
  @Field(() => ModificationWhereInput, {
    nullable: true,
  })
  every?: ModificationWhereInput;

  @ApiProperty({
    required: false,
    type: () => ModificationWhereInput,
  })
  @ValidateNested()
  @Type(() => ModificationWhereInput)
  @IsOptional()
  @Field(() => ModificationWhereInput, {
    nullable: true,
  })
  some?: ModificationWhereInput;

  @ApiProperty({
    required: false,
    type: () => ModificationWhereInput,
  })
  @ValidateNested()
  @Type(() => ModificationWhereInput)
  @IsOptional()
  @Field(() => ModificationWhereInput, {
    nullable: true,
  })
  none?: ModificationWhereInput;
}
export { ModificationListRelationFilter as ModificationListRelationFilter };