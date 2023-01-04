import { CreateUserDto } from "../../../infra/http/users/dto/create-user.dto";
import { User } from "../entities/user.entity";

export abstract class UsersRepository {
    abstract create(createUserDto: CreateUserDto): Promise<any>;
    abstract findAll(): Promise<any[]>;
    abstract findById(userId: number): Promise<User>;
    abstract findUserWithHisCreditCards(userId: number): Promise<any>;
    abstract findUserWithHisOutgoings(userId: number): Promise<any>;
}