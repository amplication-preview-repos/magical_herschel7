import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ModificationServiceBase } from "./base/modification.service.base";

@Injectable()
export class ModificationService extends ModificationServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
