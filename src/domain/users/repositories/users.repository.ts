import { CreateUserDto } from "../../../infra/http/users/dto/create-user.dto";

export abstract class UsersRepository {
    abstract create(createUserDto: CreateUserDto): Promise<any>;
    abstract findAll(): Promise<any[]>;
    abstract findUserWithHisCreditCards(userId: number): Promise<any>;
    abstract findUserWithHisOutgoings(userId: number): Promise<any>;
}