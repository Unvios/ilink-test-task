import { ApiProperty } from "@nestjs/swagger";

export class DeleteUserDto {
    @ApiProperty({
        example: 'f8189290-327e-4c0c-90a3-26ccbb5be0ce',
        description: 'Идентификатор пользователя',
    })
    id: string;
}
