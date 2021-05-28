import { Module } from "@nestjs/common";
import { SequelizeModule } from "@nestjs/sequelize";
import { GroupController } from "./group.controller";
import { GroupModel } from "./group.model";
import { GroupService } from "./group.service";

@Module({
    controllers: [
        GroupController,
    ],
    providers: [
        GroupService,
    ],
    imports: [
        SequelizeModule.forFeature([
            GroupModel,
        ]),
    ],
})
export class GroupModule {}
