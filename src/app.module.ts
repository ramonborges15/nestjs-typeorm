import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CreditCardsModule } from './core/credit-cards/credit-cards.module';
import { OutgoingsModule } from './core/outgoings/outgoings.module';
import { UsersModule } from './core/users/users.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'test',
      password: 'test',
      database: 'test',
      synchronize: true,
      autoLoadEntities: true,
    }),
    UsersModule,
    OutgoingsModule,
    CreditCardsModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
