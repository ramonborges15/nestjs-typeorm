import { CreateCreditCardDto } from "../../../infra/http/credit-cards/dtos/create-credit-card.dto";
import { CreditCard } from "../entities/credit-card.entity";

export abstract class CreditcardRepository {
    abstract create(creditCard: CreditCard): Promise<any>;
    abstract findAll(): Promise<CreditCard[]>;
    abstract findById(creditCardId: number): Promise<CreditCard>;
}