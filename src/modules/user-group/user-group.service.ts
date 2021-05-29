import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { UserGroupDto } from "./dto/user-group.dto";
import { UserGroupModel } from "./user-group.model";

@Injectable()
export class UserGroupService {
    constructor (
        @InjectModel(UserGroupModel) private readonly _userGroupRepository: typeof UserGroupModel,
    ) {}


    async addUserToGroup (dto: UserGroupDto): Promise<UserGroupModel> {
        return await this._userGroupRepository.create(dto);
    }


    async deleteUserFromGroup (dto: UserGroupDto): Promise<UserGroupModel> {
        const userGroupModel = await this._userGroupRepository.findOne({
            where: dto,
        });

        await userGroupModel.destroy();

        return userGroupModel;
    }
}
