import { Body, Controller, Delete, Post } from "@nestjs/common";
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { UserFriendDto } from "./dto/user-friend.dto";
import { UserFriendModel } from "./user-friend.model";
import { UserFriendService } from "./user-friend.service";

@ApiTags('Друзья пользователей')
@Controller('user/friend')
export class UserFriendController {
    constructor (
        private readonly _userFriendService: UserFriendService,
    ) {}


    @ApiOperation({ summary: 'Добавить друга пользователю' })
    @ApiResponse({ status: 200, type: UserFriendModel })
    @Post()
    addFriendToUser (
        @Body() dto: UserFriendDto,
    ) {
        return this._userFriendService.addFriend(dto);
    }


    @ApiOperation({ summary: 'Удалить друга у пользователя' })
    @ApiResponse({ status: 200, type: UserFriendModel })
    @Delete()
    deleteFriendFromUser (
        @Body() dto: UserFriendDto,
    ) {
        return this._userFriendService.deleteFriend(dto);
    }
}
