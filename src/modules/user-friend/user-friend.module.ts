import { Module } from "@nestjs/common";
import { SequelizeModule } from "@nestjs/sequelize";
import { UserModel } from "../user/user.model";
import { UserFriendController } from "./user-friend.controller";
import { UserFriendModel } from "./user-friend.model";
import { UserFriendService } from "./user-friend.service";

@Module({
    controllers: [
        UserFriendController,
    ],
    providers: [
        UserFriendService,
    ],
    imports: [
        SequelizeModule.forFeature([
            UserFriendModel,
            UserModel,
        ]),
    ],
})
export class UserFriendModule {}
