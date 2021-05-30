import { Body, Controller, Delete, Post } from "@nestjs/common";
import { ApiNotFoundResponse, ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { NotFoundException } from "src/exceptions/not-found.exception";
import { UserGroupDto } from "./dto/user-group.dto";
import { UserGroupModel } from "./user-group.model";
import { UserGroupService } from "./user-group.service";

@ApiTags('Группы пользователей')
@Controller('user/group')
export class UserGroupController {
    constructor (
        private readonly _userGroupService: UserGroupService,
    ) {}


    @ApiOperation({ summary: 'Добавить пользователя в группу' })
    @ApiResponse({ status: 200, type: UserGroupModel })
    @Post()
    addUserToGroup (
        @Body() dto: UserGroupDto,
    ) {
        return this._userGroupService.addUserToGroup(dto);
    }


    @ApiOperation({ summary: 'Удалить пользователя из группы' })
    @ApiResponse({ status: 200, type: UserGroupModel })
    @ApiNotFoundResponse({ type: NotFoundException })
    @Delete()
    deleteUserFromGroup (
        @Body() dto: UserGroupDto,
    ) {
        return this._userGroupService.deleteUserFromGroup(dto);
    }
}
