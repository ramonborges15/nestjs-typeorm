import { CreditCard } from '@domain/credit-cards/entities/credit-card.entity';
import { CreateCreditCard } from '@domain/credit-cards/use-cases/create-credit-card.use-case';
import { ListCreditCards } from '@domain/credit-cards/use-cases/list-credit-cards.use-case';
import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateCreditCardDto } from '../dtos/create-credit-card.dto';
import { CreditCardViewModel } from '../view-models/credit-card.view-model';

@Controller('credit-cards')
export class CreditCardsController {
  constructor(
    private createCreditCard: CreateCreditCard,
    private listAllCreditCard: ListCreditCards
  ) { }

  @Post()
  create(@Body() createCreditCardDto: CreateCreditCardDto) {
    return this.createCreditCard.execute(createCreditCardDto);
  }

  @Get()
  async findAll() {
    const creditCards: CreditCard[] = await this.listAllCreditCard.execute();
    return creditCards.map(creditCard => CreditCardViewModel.toHTTP(creditCard));
  }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.creditCardsService.findOne(+id);
  // }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateCreditCardDto: UpdateCreditCardDto) {
  //   return this.creditCardsService.update(+id, updateCreditCardDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.creditCardsService.remove(+id);
  // }
}
