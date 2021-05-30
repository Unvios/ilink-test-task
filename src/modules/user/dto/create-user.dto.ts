import { Field, InputType } from '@nestjs/graphql';
import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

@InputType()
export class CreateUserDto {
    @ApiProperty({
        required: true,
        example: 'UserLogin',
        description: 'Логин пользователя',
    })
    @Field({
        description: 'Логин пользователя',
    })
    @IsString()
    @IsNotEmpty()
    login: string;
}
