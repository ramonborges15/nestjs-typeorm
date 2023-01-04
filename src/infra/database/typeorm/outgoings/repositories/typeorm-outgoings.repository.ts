import { Outgoing } from "@domain/outgoings/entities/outgoing.entity";
import { OutgoingsRepository } from "@domain/outgoings/repositories/outgoings.repository";
import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";

@Injectable()
export class TypeOrmOutgoingsRepository implements OutgoingsRepository {

    constructor(
        @InjectRepository(Outgoing)
        private outgoingsRepository: Repository<Outgoing>
    ) { }

    async create(outgoing: Outgoing): Promise<void> {
        await this.outgoingsRepository.save(outgoing);
    }

    async findAll(): Promise<Outgoing[]> {
        return await this.outgoingsRepository.find();
    }
}