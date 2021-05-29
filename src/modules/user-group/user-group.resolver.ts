import { Args, Mutation, Resolver } from "@nestjs/graphql";
import { UserGroupDto } from "./dto/user-group.dto";
import { UserGroupModel } from "./user-group.model";
import { UserGroupService } from "./user-group.service";

@Resolver(() => UserGroupModel)
export class UserGroupResolver {
    constructor (
        private readonly _userGroupService: UserGroupService,
    ) {}


    @Mutation(() => UserGroupModel, {
        description: 'Добавить пользователя в группу',
    })
    addUserToGroup (
        @Args('dto') dto: UserGroupDto,
    ) {
        return this._userGroupService.addUserToGroup(dto);
    }


    @Mutation(() => UserGroupModel, {
        description: 'Удалить пользователя из группы',
    })
    deleteUserFromGroup (
        @Args('dto') dto: UserGroupDto,
    ) {
        return this._userGroupService.deleteUserFromGroup(dto);
    }
}
