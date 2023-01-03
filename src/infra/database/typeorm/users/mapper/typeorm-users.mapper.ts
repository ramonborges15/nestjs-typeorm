import { User } from "@domain/users/entities/user.entity";

export class TypeOrmUsersMapper {
    static toTypeORM(user: User) {

    }

    static toDomain(raw: any): User {
        return null;
    }
}