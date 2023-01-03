import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../users/entities/user.entity';
import { CreateCreditCardDto } from './dto/create-credit-card.dto';
import { UpdateCreditCardDto } from './dto/update-credit-card.dto';
import { CreditCard } from './entities/credit-card.entity';

@Injectable()
export class CreditCardsService {

  constructor(
    @InjectRepository(CreditCard)
    private creditCardsRepository: Repository<CreditCard>,
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) { }

  async create(createCreditCardDto: CreateCreditCardDto) {
    const user = await this.usersRepository.findOne({ where: { id: createCreditCardDto.userId } });

    if (!user) {
      throw '404 - Client request error!'
    }

    const creditCard = {
      limit: createCreditCardDto.limit,
      closingDayAt: createCreditCardDto.closingDayAt,
      dueDayAt: createCreditCardDto.dueDayAt,
      user: user,
      name: createCreditCardDto.name
    }

    return await this.creditCardsRepository.save(creditCard);
  }

  async findAll() {
    return await this.creditCardsRepository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} creditCard`;
  }

  update(id: number, updateCreditCardDto: UpdateCreditCardDto) {
    return `This action updates a #${id} creditCard`;
  }

  remove(id: number) {
    return `This action removes a #${id} creditCard`;
  }
}
