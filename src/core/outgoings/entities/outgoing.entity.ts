import { CreditCard } from "src/core/credit-cards/entities/credit-card.entity";
import { User } from "src/core/users/entities/user.entity";
import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, Relation, ManyToOne, JoinColumn } from "typeorm";


@Entity()
export class Outgoing {
    @PrimaryGeneratedColumn()
    id: number

    @CreateDateColumn()
    createdAt: string;

    @UpdateDateColumn()
    updateAt: string;

    @Column()
    paiedOut: boolean;

    @Column()
    paiedOutAt: string;

    @Column()
    value: number;

    @ManyToOne(type => CreditCard, (creditCard) => creditCard.outgoings)
    @JoinColumn() // The owning side of a relationship contains a column with a foreign key in the database.
    creditCard: Relation<CreditCard>;

    @ManyToOne(type => User, (user) => user.outgoings)
    @JoinColumn() // The owning side of a relationship contains a column with a foreign key in the database.
    user: Relation<User>; //If you use ESM in your TypeScript project, you should use the Relation wrapper type in relation properties to avoid circular dependency issues. 
}