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


    @Query(() => [UserModel], {
        description: 'Получить список пользователей',
    })
    users () {
        return this._userService.getUsers();
    }


    @Query(() => UserModel, {
        description: 'Получить пользователя',
    })
    user (
        @Args('id') id: string,
    ) {
        return this._userService.getUser(id);
    }


    @Mutation(() => UserModel, {
        description: 'Создать пользователя',
    })
    createUser (
        @Args('dto') dto: CreateUserDto,
    ) {
        return this._userService.createUser(dto);
    }


    @Mutation(() => UserModel, {
        description: 'Обновить данные пользователя',
    })
    updateUser (
        @Args('dto') dto: UpdateUserDto,
    ) {
        return this._userService.updateUser(dto);
    }


    @Mutation(() => UserModel, {
        description: 'Удалить пользователя',
    })
    deleteUser (
        @Args('dto') dto: DeleteUserDto,
    ) {
        return this._userService.deleteUser(dto);
    }
}
