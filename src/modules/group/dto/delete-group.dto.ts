import { ApiProperty } from "@nestjs/swagger";

export class DeleteGroupDto {
    @ApiProperty({
        example: 'f8189290-327e-4c0c-90a3-26ccbb5be0ce',
        description: 'Идентификатор группы',
    })
    id: string;
}
