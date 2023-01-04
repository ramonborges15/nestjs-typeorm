import { CreditCard } from "@domain/credit-cards/entities/credit-card.entity";
import { CreditcardRepository } from "@domain/credit-cards/repositories/credit-card.repository";
import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";

@Injectable()
export class TypeOrmCreditCardsRepository implements CreditcardRepository {
    constructor(
        @InjectRepository(CreditCard)
        private creditCardsRepository: Repository<CreditCard>
    ) { }

    async create(creditCard: CreditCard): Promise<any> {
        await this.creditCardsRepository.save(creditCard);
    }

    async findAll(): Promise<any[]> {
        return await this.creditCardsRepository.find({
            relations: {
                user: true
            }
        });
    }

    findById(creditCardId: number): Promise<CreditCard> {
        return this.creditCardsRepository.findOne({ where: { id: creditCardId } });
    }
}