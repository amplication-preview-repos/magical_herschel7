import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { ModificationService } from "./modification.service";
import { ModificationControllerBase } from "./base/modification.controller.base";

@swagger.ApiTags("modifications")
@common.Controller("modifications")
export class ModificationController extends ModificationControllerBase {
  constructor(
    protected readonly service: ModificationService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
