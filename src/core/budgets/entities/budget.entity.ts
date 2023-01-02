import { CreditCard } from "src/core/credit-cards/entities/credit-card.entity";
import { User } from "src/core/users/entities/user.entity";
import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, Relation, OneToMany, ManyToOne, JoinColumn, OneToOne } from "typeorm"


@Entity()
export class Budget {
    @PrimaryGeneratedColumn()
    id: number

    @CreateDateColumn()
    createdAt: string;

    @UpdateDateColumn()
    updateAt: string;

    @Column()
    maximumInstallments: number;

    @Column()
    maximumLimitTotalOutcoming: number;

    @Column()
    wagePercenctualToOutcomingMonthly: number;

    @OneToOne(type => CreditCard)
    creditCard: Relation<CreditCard>;

    @ManyToOne(type => User)
    user: Relation<User>;

    public maximumOutcomingMonthly(): number {
        if (!this.user) {
            return 0;
        }

        return this.wagePercenctualToOutcomingMonthly * (0.01) * this.user.wage;
    }
}