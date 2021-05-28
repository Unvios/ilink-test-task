import { Column, DataType, Model, Table } from "sequelize-typescript";
import { CreateUserDto } from "./dto/create-user.dto";

@Table({ tableName: 'user' })
export class UserModel extends Model<UserModel, CreateUserDto> {
    @Column({
        type: DataType.UUID,
        defaultValue: DataType.UUIDV4,
        primaryKey: true,
        allowNull: false,
        unique: true,
    })
    id: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
        unique: true,
    })
    login: string;
}
