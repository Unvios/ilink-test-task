import { Module } from "@nestjs/common";
import { SequelizeModule } from "@nestjs/sequelize";
import { GroupModel } from "../group/group.model";
import { UserFriendModel } from "../user-friend/user-friend.model";
import { UserGroupModel } from "../user-group/user-group.model";
import { UserController } from "./user.controller";
import { UserModel } from "./user.model";
import { UserResolver } from "./user.resolver";
import { UserService } from "./user.service";

@Module({
    controllers: [
        UserController,
    ],
    providers: [
        UserResolver,
        UserService,
        UserResolver,
    ],
    imports: [
        SequelizeModule.forFeature([
            UserModel,
            GroupModel,
            UserGroupModel,
            UserFriendModel,
        ]),
    ],
})
export class UserModule {}
