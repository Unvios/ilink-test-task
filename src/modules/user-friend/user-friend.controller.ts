import { Body, Controller, Delete, Post } from "@nestjs/common";
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { UserFriendDto } from "./dto/user-friend.dto";
import { UserFriendService } from "./user-friend.service";

@ApiTags('Друзья пользователей')
@Controller('user/friend')
export class UserFriendController {
    constructor (
        private readonly _userFriendService: UserFriendService,
    ) {}


    @ApiOperation({ summary: 'Добавить друга пользователю' })
    @ApiResponse({ status: 200 })
    @Post()
    addFriendToUser (
        @Body() dto: UserFriendDto,
    ) {
        return this._userFriendService.addFriend(dto);
    }


    @ApiOperation({ summary: 'Удалить друга у пользователя' })
    @ApiResponse({ status: 200 })
    @Delete()
    deleteFriendFromUser (
        @Body() dto: UserFriendDto,
    ) {
        return this._userFriendService.deleteFriend(dto);
    }
}
