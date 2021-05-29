import { Module } from "@nestjs/common";
import { SequelizeModule } from "@nestjs/sequelize";
import { UserGroupModel } from "../user-group/user-group.model";
import { UserModel } from "../user/user.model";
import { GroupController } from "./group.controller";
import { GroupModel } from "./group.model";
import { GroupResolver } from "./group.resolver";
import { GroupService } from "./group.service";

@Module({
    controllers: [
        GroupController,
    ],
    providers: [
        GroupService,
        GroupResolver,
    ],
    imports: [
        SequelizeModule.forFeature([
            GroupModel,
            UserModel,
            UserGroupModel,
        ]),
    ],
})
export class GroupModule {}
