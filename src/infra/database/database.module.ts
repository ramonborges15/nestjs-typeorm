import { Budget } from '@domain/budgets/entities/budget.entity';
import { CreditCard } from '@domain/credit-cards/entities/credit-card.entity';
import { CreditcardRepository } from '@domain/credit-cards/repositories/credit-card.repository';
import { Outgoing } from '@domain/outgoings/entities/outgoing.entity';
import { OutgoingsRepository } from '@domain/outgoings/repositories/outgoings.repository';
import { User } from '@domain/users/entities/user.entity';
import { UsersRepository } from '@domain/users/repositories/users.repository';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeOrmCreditCardsRepository } from './typeorm/credit-cards/repositories/typeorm-credit-cards.repository';
import { TypeOrmOutgoingsRepository } from './typeorm/outgoings/repositories/typeorm-outgoings.repository';

import { TypeOrmUsersRepository } from './typeorm/users/repositories/typeorm-users.repository';

@Module({
    imports: [TypeOrmModule.forFeature([User, Outgoing, CreditCard, Budget])],
    providers: [
        {
            provide: UsersRepository,
            useClass: TypeOrmUsersRepository
        },
        {
            provide: CreditcardRepository,
            useClass: TypeOrmCreditCardsRepository
        },
        {
            provide: OutgoingsRepository,
            useClass: TypeOrmOutgoingsRepository
        }
    ],
    exports: [UsersRepository, CreditcardRepository, OutgoingsRepository]
})
export class DatabaseModule { }
