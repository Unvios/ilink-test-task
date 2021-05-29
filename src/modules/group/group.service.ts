import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { UserModel } from "../user/user.model";
import { CreateGroupDto } from "./dto/create-group.dto";
import { DeleteGroupDto } from "./dto/delete-group.dto";
import { UpdateGroupDto } from "./dto/update-group.dto";
import { GroupModel } from "./group.model";

@Injectable()
export class GroupService {
    constructor (
        @InjectModel(GroupModel) private readonly _groupRepository: typeof GroupModel,
    ) {}


    async getGroups (): Promise<GroupModel[]> {
        const groups = await this._groupRepository.findAll();

        return groups;
    }


    async getGroup (id: string): Promise<GroupModel> {
        const group = await this._groupRepository.findByPk(id, {
            include: {
                all: true,
            },
        });

        return group;
    }


    async createGroup (dto: CreateGroupDto): Promise<GroupModel> {
        const group = await this._groupRepository.create(dto);

        return group;
    }


    async updateGroup (dto: UpdateGroupDto): Promise<GroupModel> {
        const group = await this._groupRepository.findByPk(dto.id);

        await group.update({
            name: dto.name,
        });

        return group;
    }


    async deleteGroup (dto: DeleteGroupDto): Promise<GroupModel> {
        const group = await this._groupRepository.findOne({
            where: dto,
        });

        await group.destroy();

        return group;
    }
}
