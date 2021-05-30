import { Module } from "@nestjs/common";
import { SequelizeModule } from "@nestjs/sequelize";
import { UserGroupController } from "./user-group.controller";
import { UserGroupModel } from "./user-group.model";
import { UserGroupResolver } from "./user-group.resolver";
import { UserGroupService } from "./user-group.service";

@Module({
    controllers: [
        UserGroupController,
    ],
    providers: [
        UserGroupService,
        UserGroupResolver,
    ],
    imports: [
        SequelizeModule.forFeature([
            UserGroupModel,
        ]),
    ],
})
export class UserGroupModule {}
