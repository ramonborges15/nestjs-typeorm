import { Injectable } from "@nestjs/common";
import { UsersRepository } from "../repositories/users.repository";

interface CreateUserRequest {
    firstName: string;
    lastName: string;
    age: number;
    wage: number;
}

interface CreateUserResponse {
    id: number;
    firstName: string;
    lastName: string;
    age: number;
    wage: number;
}

@Injectable()
export class CreateUser {
    constructor(private usersRepository: UsersRepository) { }

    async execute(request: CreateUserRequest): Promise<CreateUserResponse> {
        const response = await this.usersRepository.create(request);

        return {
            id: response.id,
            firstName: response.firstName,
            lastName: response.lastName,
            age: response.age,
            wage: response.wage
        };
    }
}