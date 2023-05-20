import {Column, Entity} from "typeorm";
import {BaseEntity} from "./base.entity";

@Entity('users')
export class UserEntity extends BaseEntity {
    @Column()
    username: string

    @Column()
    password: string

    @Column()
    firstName: string

    @Column()
    secondName: string

    @Column()
    age: number

    @Column()
    isAdmin: boolean
}