import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { CreateUserDto } from "@infra/http/users/dto/create-user.dto";

import { Repository } from "typeorm";
import { UsersRepository } from "@domain/users/repositories/users.repository";
import { User } from "@domain/users/entities/user.entity";

@Injectable()
export class TypeOrmUsersRepository implements UsersRepository {

    constructor(
        @InjectRepository(User)
        private usersRepository: Repository<User>
    ) { }

    async create(createUserDto: CreateUserDto): Promise<any> {
        return await this.usersRepository.save(createUserDto);
    }

    async findAll(): Promise<any[]> {
        return await this.usersRepository.find();
    }

    findUserWithHisCreditCards(userId: number): Promise<any> {
        throw new Error("Method not implemented.");
    }

    findUserWithHisOutgoings(userId: number): Promise<any> {
        throw new Error("Method not implemented.");
    }

}