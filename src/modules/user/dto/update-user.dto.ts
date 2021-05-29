import { ApiProperty } from "@nestjs/swagger";
import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class UpdateUserDto {
    @ApiProperty({
        example: 'f8189290-327e-4c0c-90a3-26ccbb5be0ce',
        description: 'Идентификатор пользователя',
    })
    @Field({
        description: 'Идентификатор пользователя',
    })
    id: string;


    @ApiProperty({
        example: 'UserLogin',
        description: 'Логин пользователя',
    })
    @Field({
        description: 'Логин пользователя',
    })
    login: string;
}
