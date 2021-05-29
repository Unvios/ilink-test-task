import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { UserFriendDto } from "./dto/user-friend.dto";
import { UserFriendModel } from "./user-friend.model";

@Injectable()
export class UserFriendService {
    constructor (
        @InjectModel(UserFriendModel) private readonly _userFriendRepository: typeof UserFriendModel,
    ) {}


    async addFriend (dto: UserFriendDto): Promise<UserFriendModel> {
        return await this._userFriendRepository.create(dto);
    }


    async deleteFriend (dto: UserFriendDto): Promise<UserFriendModel> {
        const userFriendModel = await this._userFriendRepository.findOne({
            where: dto,
        });

        await userFriendModel.destroy();

        return userFriendModel;
    }
}
