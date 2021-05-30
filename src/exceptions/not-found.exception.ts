import { NotFoundException as DefaultNotFoundException } from "@nestjs/common";
import { ApiProperty } from "@nestjs/swagger";

export class NotFoundException extends DefaultNotFoundException {
    constructor (error?: string, description?: string) {
        super(error, description);
    }


    @ApiProperty({
        example: 404,
        description: 'HTTP код ошибки',
    })
    statusCode: number;


    @ApiProperty({
        example: 'Entity not found',
        description: 'Описание ошибки',
    })
    message: string;


    @ApiProperty({
        example: 'Not found',
        description: 'Краткое описание ошибки',
    })
    error: string;
}
