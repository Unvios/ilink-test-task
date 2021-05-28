import { ApiProperty } from "@nestjs/swagger";
import { Column, DataType, Model, Table } from "sequelize-typescript";
import { CreateUserDto } from "./dto/create-user.dto";

@Table({ tableName: 'user' })
export class UserModel extends Model<UserModel, CreateUserDto> {
    @ApiProperty({
        example: 'f8189290-327e-4c0c-90a3-26ccbb5be0ce',
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
    @Column({
        type: DataType.STRING,
        allowNull: false,
        unique: true,
    })
    login: string;
}
