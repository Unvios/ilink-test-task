import { ApiProperty } from "@nestjs/swagger";
import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class UserGroupDto {
    @ApiProperty({
        example: 'd378e0cc-cbec-4491-acf2-0130a9080148',
        description: 'Идентификатор пользователя',
    })
    @Field({
        description: 'Идентификатор пользователя',
    })
    userId: string;


    @ApiProperty({
        example: '0de80d10-7d84-4ed5-86d6-105eecc5907c',
        description: 'Идентификатор группы',
    })
    @Field({
        description: 'Идентификатор группы',
    })
    groupId: string;
}
