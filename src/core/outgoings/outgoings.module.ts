import { Module } from '@nestjs/common';
import { OutgoingsService } from './outgoings.service';
import { OutgoingsController } from './outgoings.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Outgoing } from './entities/outgoing.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Outgoing])],
  controllers: [OutgoingsController],
  providers: [OutgoingsService]
})
export class OutgoingsModule { }
