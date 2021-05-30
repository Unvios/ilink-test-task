import { ApiProperty } from "@nestjs/swagger";
import { Field, InputType } from '@nestjs/graphql';
import { IsNotEmpty, IsString } from "class-validator";

@InputType()
export class CreateGroupDto {
    @ApiProperty({
        required: true,
        example: 'GroupName',
        description: 'Наименование группы',
    })
    @Field({
        description: 'Наименование группы',
    })
    @IsString()
    @IsNotEmpty()
    name: string;
}
