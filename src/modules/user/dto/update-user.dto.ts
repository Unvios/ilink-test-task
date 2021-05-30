import { Field, InputType } from '@nestjs/graphql';
import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString, IsUUID } from "class-validator";

@InputType()
export class UpdateUserDto {
    @ApiProperty({
        required: true,
        example: 'f8189290-327e-4c0c-90a3-26ccbb5be0ce',
        description: 'Идентификатор пользователя',
    })
    @Field({
        description: 'Идентификатор пользователя',
    })
    @IsUUID(4)
    @IsNotEmpty()
    id: string;


    @ApiProperty({
        example: 'UserLogin',
        description: 'Логин пользователя',
    })
    @Field({
        description: 'Логин пользователя',
    })
    @IsString()
    login: string;
}
