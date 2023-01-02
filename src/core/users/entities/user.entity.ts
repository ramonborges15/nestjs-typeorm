
import { CreditCard } from "src/core/credit-cards/entities/credit-card.entity";
import { Outgoing } from "src/core/outgoings/entities/outgoing.entity";
import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, Relation, OneToMany } from "typeorm";

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number

    @CreateDateColumn()
    createdAt: string;

    @UpdateDateColumn()
    updateAt: string;

    @Column()
    firstName: string

    @Column()
    lastName: string

    @Column()
    age: number

    @Column({ type: 'float' })
    wage: number;

    @OneToMany(type => Outgoing, (outgoing) => outgoing.user)
    outgoings: Relation<Outgoing[]>;

    @OneToMany(type => CreditCard, (creditCard) => creditCard.user)
    creditCards: Relation<CreditCard[]>;
}

