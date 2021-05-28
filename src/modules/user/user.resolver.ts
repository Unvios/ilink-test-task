import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";
import { CreateUserDto } from "./dto/create-user.dto";
import { DeleteUserDto } from "./dto/delete-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";
import { UserModel } from "./user.model";
import { UserService } from "./user.service";

@Resolver(() => UserModel)
export class UserResolver {
    constructor (
        private readonly _userService: UserService,
    ) {}


    @Query(() => [UserModel])
    users () {
        return this._userService.getUsers();
    }


    @Query(() => UserModel)
    user (
        @Args('id') id: string,
    ) {
        return this._userService.getUser(id);
    }


    @Mutation(() => UserModel)
    createUser (
        @Args('dto') dto: CreateUserDto,
    ) {
        return this._userService.createUser(dto);
    }


    @Mutation(() => UserModel)
    updateUser (
        @Args('dto') dto: UpdateUserDto,
    ) {
        return this._userService.updateUser(dto);
    }


    @Mutation(() => UserModel)
    deleteUser (
        @Args('dto') dto: DeleteUserDto,
    ) {
        return this._userService.deleteUser(dto);
    }
}
