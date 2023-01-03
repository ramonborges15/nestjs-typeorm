import { CreateUserDto } from '@infra/http/users/dto/create-user.dto';
import { UpdateUserDto } from '@infra/http/users/dto/update-user.dto';
import { CreateUser } from '@domain/users/use-cases/create-user.usecase';
import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';


@Controller('users')
export class UsersController {
  constructor(private createUser: CreateUser) { }

  @Post()
  async create(@Body() createUserDto: CreateUserDto) {
    const response = await this.createUser.execute(createUserDto);

    return {
      id: response.id,
      firstName: response.firstName,
      lastName: response.lastName,
      age: response.age,
      wage: response.wage
    };
  }

  // @Get()
  // findAll() {
  //   return this.usersService.findAll();
  // }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.usersService.findOne(+id);
  // }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
  //   return this.usersService.update(+id, updateUserDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.usersService.remove(+id);
  // }
}
