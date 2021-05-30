import { Module } from "@nestjs/common";
import { SequelizeModule } from "@nestjs/sequelize";
import { UserModel } from "../user/user.model";
import { UserFriendController } from "./user-friend.controller";
import { UserFriendModel } from "./user-friend.model";
import { UserFriendResolver } from "./user-friend.resolver";
import { UserFriendService } from "./user-friend.service";

@Module({
    controllers: [
        UserFriendController,
    ],
    providers: [
        UserFriendService,
        UserFriendResolver,
    ],
    imports: [
        SequelizeModule.forFeature([
            UserFriendModel,
        ]),
    ],
})
export class UserFriendModule {}
