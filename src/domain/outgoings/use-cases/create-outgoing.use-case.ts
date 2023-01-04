import { CreditcardRepository } from "@domain/credit-cards/repositories/credit-card.repository";
import { UsersRepository } from "@domain/users/repositories/users.repository";
import { CreateOutgoingDto } from "@infra/http/outgoings/dtos/create-outgoing.dto";
import { Injectable } from "@nestjs/common";
import { Outgoing } from "../entities/outgoing.entity";
import { OutgoingsRepository } from "../repositories/outgoings.repository";

@Injectable()
export class CreateOutgoing {
    constructor(
        private outgoingsRepository: OutgoingsRepository,
        private usersRepository: UsersRepository,
        private creditCardRepository: CreditcardRepository
    ) { }

    async execute(request: CreateOutgoingDto): Promise<any> {
        const user = await this.usersRepository.findById(request.userId);

        if (!user) {
            throw '404 - Client Request Error!';
        }

        const creditCard = await this.creditCardRepository.findById(request.creditCardId);

        if (!creditCard) {
            throw '404 - Client Request Error!';
        }

        const outgoing = new Outgoing(
            user,
            creditCard,
            request.paiedOut,
            request.paiedOutAt,
            request.value
        );

        await this.outgoingsRepository.create(outgoing);
    }
}