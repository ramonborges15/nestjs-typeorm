import { CreateOutgoing } from '@domain/outgoings/use-cases/create-outgoing.use-case';
import { ListOutgoings } from '@domain/outgoings/use-cases/list-outgoings.use-case';
import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateOutgoingDto } from '../dtos/create-outgoing.dto';


@Controller('outgoings')
export class OutgoingsController {
  constructor(
    private createOutgoing: CreateOutgoing,
    private listOutgoing: ListOutgoings
  ) { }

  @Post()
  async create(@Body() createOutgoingDto: CreateOutgoingDto) {
    return await this.createOutgoing.execute(createOutgoingDto);
  }

  @Get()
  async findAll() {
    return await this.listOutgoing.execute();
  }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.outgoingsService.findOne(+id);
  // }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateOutgoingDto: UpdateOutgoingDto) {
  //   return this.outgoingsService.update(+id, updateOutgoingDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.outgoingsService.remove(+id);
  // }
}
