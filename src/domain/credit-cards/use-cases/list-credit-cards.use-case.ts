import { Injectable } from "@nestjs/common";
import { CreditCard } from "../entities/credit-card.entity";
import { CreditcardRepository } from "../repositories/credit-card.repository";

@Injectable()
export class ListCreditCards {
    constructor(
        private creditCardRepository: CreditcardRepository
    ) { }

    async execute(): Promise<CreditCard[]> {
        return await this.creditCardRepository.findAll();
    }
}