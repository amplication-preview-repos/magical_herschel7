import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { PartModuleBase } from "./base/part.module.base";
import { PartService } from "./part.service";
import { PartController } from "./part.controller";
import { PartResolver } from "./part.resolver";

@Module({
  imports: [PartModuleBase, forwardRef(() => AuthModule)],
  controllers: [PartController],
  providers: [PartService, PartResolver],
  exports: [PartService],
})
export class PartModule {}
