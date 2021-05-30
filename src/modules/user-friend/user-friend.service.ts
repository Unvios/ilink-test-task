import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { NotFoundException } from "src/exceptions/not-found.exception";
import { UserFriendDto } from "./dto/user-friend.dto";
import { UserFriendModel } from "./user-friend.model";

@Injectable()
export class UserFriendService {
    constructor (
        @InjectModel(UserFriendModel) private readonly _userFriendRepository: typeof UserFriendModel,
    ) {}


    addFriend (dto: UserFriendDto): Promise<UserFriendModel> {
        return this._userFriendRepository.create(dto);
    }


    async deleteFriend (dto: UserFriendDto): Promise<UserFriendModel> {
        const userFriendModel = await this.getRelation(dto);

        if (!userFriendModel) {
            throw new NotFoundException('User does not have such friend');
        }

        await userFriendModel.destroy();

        return userFriendModel;
    }


    private async getRelation (dto: UserFriendDto): Promise<UserFriendModel | null> {
        return this._userFriendRepository.findOne({
            where: dto,
        });
    }
}
