/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import { CarModelService } from "../carModel.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { CarModelCreateInput } from "./CarModelCreateInput";
import { CarModel } from "./CarModel";
import { CarModelFindManyArgs } from "./CarModelFindManyArgs";
import { CarModelWhereUniqueInput } from "./CarModelWhereUniqueInput";
import { CarModelUpdateInput } from "./CarModelUpdateInput";
import { PartFindManyArgs } from "../../part/base/PartFindManyArgs";
import { Part } from "../../part/base/Part";
import { PartWhereUniqueInput } from "../../part/base/PartWhereUniqueInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class CarModelControllerBase {
  constructor(
    protected readonly service: CarModelService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: CarModel })
  @nestAccessControl.UseRoles({
    resource: "CarModel",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async createCarModel(
    @common.Body() data: CarModelCreateInput
  ): Promise<CarModel> {
    return await this.service.createCarModel({
      data: data,
      select: {
        createdAt: true,
        id: true,
        modelUrl: true,
        name: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [CarModel] })
  @ApiNestedQuery(CarModelFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "CarModel",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async carModels(@common.Req() request: Request): Promise<CarModel[]> {
    const args = plainToClass(CarModelFindManyArgs, request.query);
    return this.service.carModels({
      ...args,
      select: {
        createdAt: true,
        id: true,
        modelUrl: true,
        name: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: CarModel })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "CarModel",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async carModel(
    @common.Param() params: CarModelWhereUniqueInput
  ): Promise<CarModel | null> {
    const result = await this.service.carModel({
      where: params,
      select: {
        createdAt: true,
        id: true,
        modelUrl: true,
        name: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: CarModel })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "CarModel",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async updateCarModel(
    @common.Param() params: CarModelWhereUniqueInput,
    @common.Body() data: CarModelUpdateInput
  ): Promise<CarModel | null> {
    try {
      return await this.service.updateCarModel({
        where: params,
        data: data,
        select: {
          createdAt: true,
          id: true,
          modelUrl: true,
          name: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: CarModel })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "CarModel",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteCarModel(
    @common.Param() params: CarModelWhereUniqueInput
  ): Promise<CarModel | null> {
    try {
      return await this.service.deleteCarModel({
        where: params,
        select: {
          createdAt: true,
          id: true,
          modelUrl: true,
          name: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id/parts")
  @ApiNestedQuery(PartFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Part",
    action: "read",
    possession: "any",
  })
  async findParts(
    @common.Req() request: Request,
    @common.Param() params: CarModelWhereUniqueInput
  ): Promise<Part[]> {
    const query = plainToClass(PartFindManyArgs, request.query);
    const results = await this.service.findParts(params.id, {
      ...query,
      select: {
        carModel: {
          select: {
            id: true,
          },
        },

        createdAt: true,
        id: true,
        name: true,
        typeField: true,
        updatedAt: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/parts")
  @nestAccessControl.UseRoles({
    resource: "CarModel",
    action: "update",
    possession: "any",
  })
  async connectParts(
    @common.Param() params: CarModelWhereUniqueInput,
    @common.Body() body: PartWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      parts: {
        connect: body,
      },
    };
    await this.service.updateCarModel({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/parts")
  @nestAccessControl.UseRoles({
    resource: "CarModel",
    action: "update",
    possession: "any",
  })
  async updateParts(
    @common.Param() params: CarModelWhereUniqueInput,
    @common.Body() body: PartWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      parts: {
        set: body,
      },
    };
    await this.service.updateCarModel({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/parts")
  @nestAccessControl.UseRoles({
    resource: "CarModel",
    action: "update",
    possession: "any",
  })
  async disconnectParts(
    @common.Param() params: CarModelWhereUniqueInput,
    @common.Body() body: PartWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      parts: {
        disconnect: body,
      },
    };
    await this.service.updateCarModel({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Post("/car-model")
  @swagger.ApiOkResponse({
    type: CarModelCreateInput,
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException,
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async CreateCarModel(
    @common.Body()
    body: CarModelCreateInput
  ): Promise<CarModelCreateInput> {
    return this.service.CreateCarModel(body);
  }
}