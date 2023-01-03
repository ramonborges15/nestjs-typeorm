import { Budget } from '@domain/budgets/entities/budget.entity';
import { CreditCard } from '@domain/credit-cards/entities/credit-card.entity';
import { Outgoing } from '@domain/outgoings/entities/outgoing.entity';
import { User } from '@domain/users/entities/user.entity';
import { UsersRepository } from '@domain/users/repositories/users.repository';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { TypeOrmUsersRepository } from './typeorm/users/repositories/typeorm-users.repository';

@Module({
    imports: [TypeOrmModule.forFeature([User, Outgoing, CreditCard, Budget])],
    providers: [
        {
            provide: UsersRepository,
            useClass: TypeOrmUsersRepository
        }
    ],
    exports: [UsersRepository]
})
export class DatabaseModule { }
