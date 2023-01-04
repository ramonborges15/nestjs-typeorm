import { Outgoing } from "../entities/outgoing.entity";

export abstract class OutgoingsRepository {
    abstract create(outgoing: Outgoing): Promise<void>;
    abstract findAll(): Promise<Outgoing[]>;
}