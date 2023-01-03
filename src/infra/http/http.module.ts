import { CreateUser } from '@domain/users/use-cases/create-user.usecase';
import { UsersService } from '@domain/users/users.service';
import { DatabaseModule } from '@infra/database/database.module';
import { Module } from '@nestjs/common';
import { UsersController } from './users/controllers/users.controller';

@Module({
    imports: [DatabaseModule],
    controllers: [UsersController],
    providers: [
        CreateUser
    ]
})
export class HttpModule { }
