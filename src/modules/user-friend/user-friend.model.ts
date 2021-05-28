import { ApiProperty } from "@nestjs/swagger";
import { Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import { UserModel } from "../user/user.model";
import { UserFriendDto } from "./dto/user-friend.dto";

@Table({ tableName: 'user_friend', createdAt: false, updatedAt: false })
export class UserFriendModel extends Model<UserFriendModel, UserFriendDto> {
    @ApiProperty({
        example: 'f8189290-327e-4c0c-90a3-26ccbb5be0ce',
        description: 'Идентификатор пользователя',
    })
    @Column({
        type: DataType.UUID,
        primaryKey: true,
        allowNull: false,
    })
    userId: string;


    @ApiProperty({
        example: '0de80d10-7d84-4ed5-86d6-105eecc5907c',
        description: 'Идентификатор друга пользователя',
    })
    @Column({
        type: DataType.UUID,
        primaryKey: true,
        allowNull: false,
    })
    friendId: string;
}
