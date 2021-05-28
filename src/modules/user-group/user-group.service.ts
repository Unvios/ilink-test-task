import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { UserGroupDto } from "./dto/user-group.dto";
import { UserGroupModel } from "./user-group.model";

@Injectable()
export class UserGroupService {
    constructor (
        @InjectModel(UserGroupModel) private readonly _userGroupRepository: typeof UserGroupModel,
    ) {}


    async addUserToGroup (dto: UserGroupDto): Promise<void> {
        await this._userGroupRepository.create(dto);
    }


    async deleteUserFromGroup (dto: UserGroupDto): Promise<void> {
        await this._userGroupRepository.destroy({
            where: dto,
        });
    }
}
