import { Injectable } from "@nestjs/common";
import { Outgoing } from "../entities/outgoing.entity";
import { OutgoingsRepository } from "../repositories/outgoings.repository";

@Injectable()
export class ListOutgoings {
    constructor(
        private outgoingsRepository: OutgoingsRepository
    ) { }

    async execute(): Promise<Outgoing[]> {
        return await this.outgoingsRepository.findAll();
    }
}