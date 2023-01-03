import { Outgoing } from "@domain/outgoings/entities/outgoing.entity";
import { User } from "@domain/users/entities/user.entity";
import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, Relation, OneToMany, ManyToOne, JoinColumn } from "typeorm"

@Entity()
export class CreditCard {
    @PrimaryGeneratedColumn()
    id: number

    @CreateDateColumn()
    createdAt: string;

    @UpdateDateColumn()
    updateAt: string;

    @Column()
    name: string;

    @Column()
    limit: number;

    @Column()
    closingDayAt: number;

    @Column()
    dueDayAt: number;

    @OneToMany(type => Outgoing, (outgoing) => outgoing.creditCard)
    outgoings: Relation<Outgoing[]>;

    @ManyToOne(type => User, (user) => user.creditCards)
    @JoinColumn() // The owning side of a relationship contains a column with a foreign key in the database.
    user: Relation<User>;
}