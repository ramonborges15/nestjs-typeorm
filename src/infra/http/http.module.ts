import { CreateCreditCard } from '@domain/credit-cards/use-cases/create-credit-card.use-case';
import { ListCreditCards } from '@domain/credit-cards/use-cases/list-credit-cards.use-case';
import { CreateOutgoing } from '@domain/outgoings/use-cases/create-outgoing.use-case';
import { ListOutgoings } from '@domain/outgoings/use-cases/list-outgoings.use-case';
import { CreateUser } from '@domain/users/use-cases/create-user.use-case';
import { ListUsers } from '@domain/users/use-cases/list-users.use-case';
import { DatabaseModule } from '@infra/database/database.module';
import { Module } from '@nestjs/common';
import { CreditCardsController } from './credit-cards/controllers/credit-cards.controller';
import { OutgoingsController } from './outgoings/controllers/outgoings.controller';
import { UsersController } from './users/controllers/users.controller';

@Module({
    imports: [DatabaseModule],
    controllers: [UsersController, CreditCardsController, OutgoingsController],
    providers: [
        CreateUser,
        ListUsers,
        CreateCreditCard,
        ListCreditCards,
        CreateOutgoing,
        ListOutgoings
    ]
})
export class HttpModule { }
