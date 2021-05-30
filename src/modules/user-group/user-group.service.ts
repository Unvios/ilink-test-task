import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { NotFoundException } from "src/exceptions/not-found.exception";
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
        const userGroupModel = await this.getRelation(dto);

        if (!userGroupModel) {
            throw new NotFoundException('User is not in this group');
        }

        await userGroupModel.destroy();

        return userGroupModel;
    }


    private async getRelation (dto: UserGroupDto): Promise<UserGroupModel | null> {
        return this._userGroupRepository.findOne({
            where: dto,
        });
    }
}
