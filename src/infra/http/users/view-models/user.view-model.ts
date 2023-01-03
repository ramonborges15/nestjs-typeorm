import { User } from "@domain/users/entities/user.entity";

export class UserViewModel {
    static toHTTP(user: User) {
        return {
            id: user.id,
            firstName: user.firstName,
            lastName: user.lastName,
            age: user.age,
            wage: user.wage
        }
    }
}