import { CreateUser } from '@domain/users/use-cases/create-user.use-case';
import { ListUsers } from '@domain/users/use-cases/list-users.use-case';
import { CreateUserDto } from '@infra/http/users/dto/create-user.dto';
import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserViewModel } from '../view-models/user.view-model';


@Controller('users')
export class UsersController {
  constructor(
    private createUser: CreateUser,
    private listUsers: ListUsers
  ) { }

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

  @Get()
  async findAll() {
    const users = await this.listUsers.execute();
    return users.map(user => UserViewModel.toHTTP(user));
  }

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
