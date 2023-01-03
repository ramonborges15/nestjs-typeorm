import { CreditCard } from "@domain/credit-cards/entities/credit-card.entity";
import { User } from "@domain/users/entities/user.entity";
import { CreateCreditCardDto } from "@infra/http/credit-cards/dtos/create-credit-card.dto";
import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";

@Injectable()
export class TypeOrmCreditCardsRepository implements TypeOrmCreditCardsRepository {
    constructor(
        @InjectRepository(CreditCard)
        private creditCardsRepository: Repository<CreditCard>,
        @InjectRepository(User)
        private usersRepository: Repository<User>
    ) { }

    async create(createCreditCardDto: CreateCreditCardDto): Promise<any> {
        const user = await this.usersRepository.findOne({
            where: {
                id: createCreditCardDto.userId
            }
        })

        if (!user) {
            throw '404 - Client response error!';
        }

        const creditCard = {
            closingDayAt: createCreditCardDto.closingDayAt,
            dueDayAt: createCreditCardDto.dueDayAt,
            limit: createCreditCardDto.limit,
            name: createCreditCardDto.name,
            user: user
        }

        return await this.creditCardsRepository.save(creditCard);
    }

    async findAll(): Promise<any[]> {
        return await this.creditCardsRepository.find({
            relations: {
                user: true
            }
        });
    }
}