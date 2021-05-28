import { ApiProperty } from "@nestjs/swagger";

export class UserFriendDto {
    @ApiProperty({
        example: 'd378e0cc-cbec-4491-acf2-0130a9080148',
        description: 'Идентификатор пользователя',
    })
    userId: string;


    @ApiProperty({
        example: '0de80d10-7d84-4ed5-86d6-105eecc5907c',
        description: 'Идентификатор друга пользователя',
    })
    friendId: string;
}
