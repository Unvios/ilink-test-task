import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { GraphQLModule } from '@nestjs/graphql';
import { SequelizeModule } from "@nestjs/sequelize";
import { join } from "path";
import { GroupModule } from "./modules/group/group.module";
import { UserFriendModule } from "./modules/user-friend/user-friend.module";
import { UserGroupModule } from "./modules/user-group/user-group.module";
import { UserModule } from "./modules/user/user.module";

@Module({
    imports: [
        ConfigModule.forRoot({
            envFilePath: '.env',
        }),
        SequelizeModule.forRoot({
            dialect: 'postgres',
            host: process.env.DB_HOST,
            port: Number(process.env.DB_PORT),
            username: process.env.DB_USER,
            password: process.env.DB_PASSWORD,
            database: process.env.DB_NAME,
            models: [],
            autoLoadModels: true,
        }),
        GraphQLModule.forRoot({
            autoSchemaFile: true,
        }),
        UserModule,
        GroupModule,
        UserGroupModule,
        UserFriendModule,
    ],
})
export class AppModule {}
