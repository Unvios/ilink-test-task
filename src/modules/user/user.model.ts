import { ApiProperty } from "@nestjs/swagger";
import { BelongsToMany, Column, DataType, HasMany, Model, Table } from "sequelize-typescript";
import { GroupModel } from "../group/group.model";
import { UserFriendModel } from "../user-friend/user-friend.model";
import { UserGroupModel } from "../user-group/user-group.model";
import { CreateUserDto } from "./dto/create-user.dto";
import { ObjectType, Field } from "@nestjs/graphql";

@ObjectType()
@Table({ tableName: 'user' })
export class UserModel extends Model<UserModel, CreateUserDto> {
    @ApiProperty({
        example: 'f8189290-327e-4c0c-90a3-26ccbb5be0ce',
        description: 'Идентификатор пользователя',
    })
    @Field({
        description: 'Идентификатор пользователя',
    })
    @Column({
        type: DataType.UUID,
        defaultValue: DataType.UUIDV4,
        primaryKey: true,
        allowNull: false,
        unique: true,
    })
    id: string;


    @ApiProperty({
        example: 'UserLogin',
        description: 'Логин пользователя',
    })
    @Field({
        description: 'Логин пользователя',
    })
    @Column({
        type: DataType.STRING,
        allowNull: false,
        unique: true,
    })
    login: string;


    @ApiProperty({
        type: () => [GroupModel],
        description: 'Группы пользователя',
    })
    @Field(() => [GroupModel], {
        description: 'Группы пользователя',
    })
    @BelongsToMany(() => GroupModel, () => UserGroupModel)
    groups: GroupModel[];


    @ApiProperty({
        example: [],
        description: 'Друзья пользователя',
    })
    @Field(() => [UserModel], {
        description: 'Друзья пользователя',
    })
    @BelongsToMany(() => UserModel, () => UserFriendModel, 'userId', 'friendId')
    friends: UserModel[];
}
