import { Field, InputType } from '@nestjs/graphql';
import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsUUID } from "class-validator";

@InputType()
export class UserGroupDto {
    @ApiProperty({
        required: true,
        example: 'd378e0cc-cbec-4491-acf2-0130a9080148',
        description: 'Идентификатор пользователя',
    })
    @Field({
        description: 'Идентификатор пользователя',
    })
    @IsUUID(4)
    @IsNotEmpty()
    userId: string;


    @ApiProperty({
        required: true,
        example: '0de80d10-7d84-4ed5-86d6-105eecc5907c',
        description: 'Идентификатор группы',
    })
    @Field({
        description: 'Идентификатор группы',
    })
    @IsUUID(4)
    @IsNotEmpty()
    groupId: string;
}
