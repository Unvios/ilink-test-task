import { ApiProperty } from "@nestjs/swagger";
import { BelongsToMany, Column, DataType, Model, Table } from "sequelize-typescript";
import { UserGroupModel } from "../user-group/user-group.model";
import { UserModel } from "../user/user.model";
import { CreateGroupDto } from "./dto/create-group.dto";
import { ObjectType, Field } from "@nestjs/graphql";

@ObjectType()
@Table({ tableName: 'group' })
export class GroupModel extends Model<GroupModel, CreateGroupDto> {
    @ApiProperty({
        example: 'f8189290-327e-4c0c-90a3-26ccbb5be0ce',
        description: 'Идентификатор группы',
    })
    @Field({
        description: 'Идентификатор группы',
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
        example: 'GroupName',
        description: 'Наименование группы',
    })
    @Field({
        description: 'Наименование группы',
    })
    @Column({
        type: DataType.STRING,
        allowNull: false,
        unique: true,
    })
    name: string;


    @ApiProperty({
        type: () => [UserModel],
        description: 'Пользователи в группе',
    })
    @Field(() => [UserModel], {
        description: 'Пользователи в группе',
    })
    @BelongsToMany(() => UserModel, () => UserGroupModel)
    users: UserModel[];
}
