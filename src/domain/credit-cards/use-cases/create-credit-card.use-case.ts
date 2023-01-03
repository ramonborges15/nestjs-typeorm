import { Injectable } from "@nestjs/common";
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
        private creditCardsRepository: CreditcardRepository
    ) { }

    async execute(request: CreateCreditCardRequest): Promise<void> {
        await this.creditCardsRepository.create(request);
    }
}