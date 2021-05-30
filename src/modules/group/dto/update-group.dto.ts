import { ApiProperty } from "@nestjs/swagger";
import { Field, InputType } from '@nestjs/graphql';
import { IsNotEmpty, IsString, IsUUID } from "class-validator";

@InputType()
export class UpdateGroupDto {
    @ApiProperty({
        required: true,
        example: 'f8189290-327e-4c0c-90a3-26ccbb5be0ce',
        description: 'Идентификатор группы',
    })
    @Field({
        description: 'Идентификатор группы',
    })
    @IsUUID(4)
    @IsNotEmpty()
    id: string;


    @ApiProperty({
        example: 'GroupName',
        description: 'Наименование группы',
    })
    @Field()
    @IsString()
    name: string;
}
