import { Args, Mutation, Resolver } from "@nestjs/graphql";
import { UserFriendDto } from "./dto/user-friend.dto";
import { UserFriendModel } from "./user-friend.model";
import { UserFriendService } from "./user-friend.service";

@Resolver(() => UserFriendModel)
export class UserFriendResolver {
    constructor (
        private readonly _userFriendService: UserFriendService,
    ) {}


    @Mutation(() => UserFriendModel, {
        description: 'Добавить друга пользователю',
    })
    addFriendToUser (
        @Args('dto') dto: UserFriendDto,
    ) {
        return this._userFriendService.addFriend(dto);
    }


    @Mutation(() => UserFriendModel, {
        description: 'Удалить друга у пользователя',
    })
    deleteFriendFromUser (
        @Args('dto') dto: UserFriendDto,
    ) {
        return this._userFriendService.deleteFriend(dto);
    }
}
