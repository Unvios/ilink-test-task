import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { CreateUserDto } from "./dto/create-user.dto";
import { DeleteUserDto } from "./dto/delete-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";
import { UserService } from "./user.service";

@Controller('user')
export class UserController {
    constructor (
        private readonly _userService: UserService,
    ) {}


    @Get()
    getUsers () {
        return this._userService.getUsers();
    }


    @Get('/:id')
    getUser (
        @Param('id') id: string,
    ) {
        return this._userService.getUser(id);
    }


    @Post()
    createUser (
        @Body() dto: CreateUserDto,
    ) {
        return this._userService.createUser(dto);
    }


    @Put()
    updateUser (
        @Body() dto: UpdateUserDto,
    ) {
        return this._userService.updateUser(dto);
    }


    @Delete()
    deleteUser (
        @Body() dto: DeleteUserDto,
    ) {
        return this._userService.deleteUser(dto);
    }
}
