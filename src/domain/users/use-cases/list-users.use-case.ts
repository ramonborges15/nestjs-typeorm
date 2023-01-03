import { Injectable } from "@nestjs/common";
import { User } from "../entities/user.entity";
import { UsersRepository } from "../repositories/users.repository";

@Injectable()
export class ListUsers {
    constructor(private usersRepository: UsersRepository) { }

    async execute(): Promise<User[]> {
        return await this.usersRepository.findAll();
    }
}