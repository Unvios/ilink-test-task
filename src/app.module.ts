import { Module } from "@nestjs/common";
import { GroupModule } from "./modules/group/group.module";
import { UserModule } from "./modules/user/user.module";

@Module({
    imports: [
        UserModule,
        GroupModule,
    ],
})
export class AppModule {};
