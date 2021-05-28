import { ApiProperty } from "@nestjs/swagger";
import { Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import { GroupModel } from "../group/group.model";
import { UserModel } from "../user/user.model";
import { UserGroupDto } from "./dto/user-group.dto";

@Table({ tableName: 'user_group', createdAt: false, updatedAt: false })
export class UserGroupModel extends Model<UserGroupModel, UserGroupDto> {
    @ApiProperty({
        example: 'f8189290-327e-4c0c-90a3-26ccbb5be0ce',
        description: 'Идентификатор пользователя',
    })
    @Column({
        type: DataType.UUID,
        primaryKey: true,
        allowNull: false,
    })
    @ForeignKey(() => UserModel)
    userId: string;


    @ApiProperty({
        example: 'f8189290-327e-4c0c-90a3-26ccbb5be0ce',
        description: 'Идентификатор группы',
    })
    @Column({
        type: DataType.UUID,
        primaryKey: true,
        allowNull: false,
    })
    @ForeignKey(() => GroupModel)
    groupId: string;
}
