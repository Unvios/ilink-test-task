import { Body, Controller, Delete, Get, Param, ParseUUIDPipe, Post, Put } from "@nestjs/common";
import { ApiNotFoundResponse, ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { NotFoundException } from "src/exceptions/not-found.exception";
import { CreateUserDto } from "./dto/create-user.dto";
import { DeleteUserDto } from "./dto/delete-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";
import { UserModel } from "./user.model";
import { UserService } from "./user.service";

@ApiTags('Пользователи')
@Controller('user')
export class UserController {
    constructor (
        private readonly _userService: UserService,
    ) {}


    @ApiOperation({ summary: 'Получить список пользователей' })
    @ApiResponse({ status: 200, type: [UserModel] })
    @Get()
    getUsers () {
        return this._userService.getUsers();
    }


    @ApiOperation({ summary: 'Получить пользователя' })
    @ApiResponse({ status: 200, type: UserModel })
    @ApiNotFoundResponse({ type: NotFoundException })
    @Get('/:id')
    getUser (
        @Param('id', new ParseUUIDPipe({version: '4'})) id: string,
    ) {
        return this._userService.getUser(id);
    }


    @ApiOperation({ summary: 'Создать пользователя' })
    @ApiResponse({ status: 200, type: UserModel })
    @Post()
    createUser (
        @Body() dto: CreateUserDto,
    ) {
        return this._userService.createUser(dto);
    }


    @ApiOperation({ summary: 'Обновить данные пользователя' })
    @ApiResponse({ status: 200, type: UserModel })
    @ApiNotFoundResponse({ type: NotFoundException })
    @Put()
    updateUser (
        @Body() dto: UpdateUserDto,
    ) {
        return this._userService.updateUser(dto);
    }


    @ApiOperation({ summary: 'Удалить пользователя' })
    @ApiResponse({ status: 200, type: UserModel })
    @ApiNotFoundResponse({ type: NotFoundException })
    @Delete()
    deleteUser (
        @Body() dto: DeleteUserDto,
    ) {
        return this._userService.deleteUser(dto);
    }
}
