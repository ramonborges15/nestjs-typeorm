import { CreditCard } from "@domain/credit-cards/entities/credit-card.entity";

export class CreditCardViewModel {
    static toHTTP(creditCard: CreditCard) {
        return {
            id: creditCard.id,
            limit: creditCard.limit,
            closingDayAt: creditCard.closingDayAt,
            dueDayAt: creditCard.dueDayAt,
            userId: creditCard.user?.id,
            name: creditCard.name
        }
    }
}