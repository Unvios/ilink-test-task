import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { CreateUserDto } from "./dto/create-user.dto";
import { DeleteUserDto } from "./dto/delete-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";
import { UserModel } from "./user.model";

@Injectable()
export class UserService {
    constructor (
        @InjectModel(UserModel) private readonly _userRepository: typeof UserModel,
    ) {}


    async getUsers (): Promise<UserModel[]> {
        const users = await this._userRepository.findAll();

        return users;
    }


    async getUser (id: string): Promise<UserModel> {
        const user = await this._userRepository.findByPk(id, {
            include: {
                all: true,
            },
        });

        return user;
    }


    async createUser (dto: CreateUserDto): Promise<UserModel> {
        const user = await this._userRepository.create(dto);

        return user;
    }


    async updateUser (dto: UpdateUserDto): Promise<UserModel> {
        const user = await this._userRepository.findByPk(dto.id);

        await user.update({
            login: dto.login,
        });

        return user;
    }


    async deleteUser (dto: DeleteUserDto): Promise<UserModel> {
        const user = await this._userRepository.findOne({
            where: dto,
        });

        await user.destroy();

        return user;
    }
}
