import { ApiProperty } from "@nestjs/swagger";

export class CreateUserDto {
    @ApiProperty({
        example: 'UserLogin',
        description: 'Логин пользователя',
    })
    login: string;
}
