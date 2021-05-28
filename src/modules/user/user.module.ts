import { Module } from "@nestjs/common";
import { SequelizeModule } from "@nestjs/sequelize";
import { GroupModel } from "../group/group.model";
import { UserController } from "./user.controller";
import { UserModel } from "./user.model";
import { UserService } from "./user.service";

@Module({
    controllers: [
        UserController,
    ],
    providers: [
        UserService,
    ],
    imports: [
        SequelizeModule.forFeature([
            UserModel,
            GroupModel,
        ]),
    ],
})
export class UserModule {}
