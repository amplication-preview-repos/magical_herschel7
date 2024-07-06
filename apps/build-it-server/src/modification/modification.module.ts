import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { ModificationModuleBase } from "./base/modification.module.base";
import { ModificationService } from "./modification.service";
import { ModificationController } from "./modification.controller";
import { ModificationResolver } from "./modification.resolver";

@Module({
  imports: [ModificationModuleBase, forwardRef(() => AuthModule)],
  controllers: [ModificationController],
  providers: [ModificationService, ModificationResolver],
  exports: [ModificationService],
})
export class ModificationModule {}
