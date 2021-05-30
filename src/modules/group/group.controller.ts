import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { ApiNotFoundResponse, ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { NotFoundException } from "@exceptions/not-found.exception";
import { CreateGroupDto } from "./dto/create-group.dto";
import { DeleteGroupDto } from "./dto/delete-group.dto";
import { UpdateGroupDto } from "./dto/update-group.dto";
import { GroupModel } from "./group.model";
import { GroupService } from "./group.service";

@ApiTags('Группы')
@Controller('group')
export class GroupController {
    constructor (
        private readonly _groupService: GroupService,
    ) {}


    @ApiOperation({ summary: 'Получить список групп' })
    @ApiResponse({ status: 200, type: [GroupModel] })
    @Get()
    getGroups () {
        return this._groupService.getGroups();
    }


    @ApiOperation({ summary: 'Получить группу' })
    @ApiResponse({ status: 200, type: GroupModel })
    @ApiNotFoundResponse({ type: NotFoundException })
    @Get('/:id')
    getGroup (
        @Param('id') id: string,
    ) {
        return this._groupService.getGroup(id);
    }


    @ApiOperation({ summary: 'Создать группу' })
    @ApiResponse({ status: 200, type: GroupModel })
    @Post()
    createGroup (
        @Body() dto: CreateGroupDto,
    ) {
        return this._groupService.createGroup(dto);
    }


    @ApiOperation({ summary: 'Обновить данные группы' })
    @ApiResponse({ status: 200, type: GroupModel })
    @ApiNotFoundResponse({ type: NotFoundException })
    @Put()
    updateGroup (
        @Body() dto: UpdateGroupDto,
    ) {
        return this._groupService.updateGroup(dto);
    }


    @ApiOperation({ summary: 'Удалить группу' })
    @ApiResponse({ status: 200, type: GroupModel })
    @ApiNotFoundResponse({ type: NotFoundException })
    @Delete()
    deleteGroup (
        @Body() dto: DeleteGroupDto,
    ) {
        return this._groupService.deleteGroup(dto);
    }
}
