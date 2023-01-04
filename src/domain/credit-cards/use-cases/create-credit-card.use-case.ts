import { UsersRepository } from "@domain/users/repositories/users.repository";
import { Injectable } from "@nestjs/common";
import { CreditCard } from "../entities/credit-card.entity";
import { CreditcardRepository } from "../repositories/credit-card.repository";

interface CreateCreditCardRequest {
    limit: number;
    closingDayAt: number;
    dueDayAt: number;
    userId: number;
    name: string;
}

@Injectable()
export class CreateCreditCard {
    constructor(
        private creditCardsRepository: CreditcardRepository,
        private usersRepository: UsersRepository
    ) { }

    async execute(request: CreateCreditCardRequest): Promise<void> {
        const user = await this.usersRepository.findById(request.userId);

        if (!user) {
            throw '404 - Client response error!';
        }

        const creditCard: CreditCard = {
            id: null,
            createdAt: null,
            updateAt: null,
            outgoings: [],
            closingDayAt: request.closingDayAt,
            dueDayAt: request.dueDayAt,
            limit: request.limit,
            name: request.name,
            user: user
        }

        await this.creditCardsRepository.create(creditCard);
    }
}