import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { CreateGroupDto } from "./dto/create-group.dto";
import { DeleteGroupDto } from "./dto/delete-group.dto";
import { UpdateGroupDto } from "./dto/update-group.dto";
import { GroupModel } from "./group.model";

@Injectable()
export class GroupService {
    constructor (
        @InjectModel(GroupModel) private readonly _groupRepository: typeof GroupModel,
    ) {}


    async getGroups () {
        const groups = await this._groupRepository.findAll();

        return groups;
    }


    async getGroup (id: string) {
        const group = await this._groupRepository.findByPk(id);

        return group;
    }


    async createGroup (dto: CreateGroupDto) {
        const group = await this._groupRepository.create(dto);

        return group;
    }

    async updateGroup (dto: UpdateGroupDto) {
        const group = await this._groupRepository.findByPk(dto.id);

        group.name = dto.name;

        await group.save();

        return group;
    }


    async deleteGroup (dto: DeleteGroupDto) {
        await this._groupRepository.destroy({
            where: dto,
        });
    }
}
