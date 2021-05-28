import { ApiProperty } from "@nestjs/swagger";

export class CreateGroupDto {
    @ApiProperty({
        example: 'GroupName',
        description: 'Наименование группы',
    })
    name: string;
}
