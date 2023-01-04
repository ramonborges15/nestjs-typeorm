import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CreateBudgetDto } from '../../infra/http/budgets/dtos/create-budget.dto';
import { UpdateBudgetDto } from '../../infra/http/budgets/dtos/update-budget.dto';

@Controller('budgets')
export class BudgetsController {
  constructor() { }

  @Post()
  create(@Body() createBudgetDto: CreateBudgetDto) {
  }

  @Get()
  findAll() {
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBudgetDto: UpdateBudgetDto) {
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
  }
}
