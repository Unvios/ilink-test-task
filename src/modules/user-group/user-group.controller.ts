import { Body, Controller, Delete, Post } from "@nestjs/common";
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { UserGroupDto } from "./dto/user-group.dto";
import { UserGroupService } from "./user-group.service";

@ApiTags('Группы пользователей')
@Controller('user/group')
export class UserGroupController {
    constructor (
        private readonly _userGroupService: UserGroupService,
    ) {}


    @ApiOperation({ summary: 'Добавить пользователя в группу' })
    @ApiResponse({ status: 200 })
    @Post()
    addUserToGroup (
        @Body() dto: UserGroupDto,
    ) {
        return this._userGroupService.addUserToGroup(dto);
    }


    @ApiOperation({ summary: 'Удалить пользователя из группы' })
    @ApiResponse({ status: 200 })
    @Delete()
    deleteUserFromGroup (
        @Body() dto: UserGroupDto,
    ) {
        return this._userGroupService.deleteUserFromGroup(dto);
    }
}
