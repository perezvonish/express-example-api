import {Column, Entity, OneToMany} from "typeorm";
import {BaseEntity} from "./base.entity";
import {PostEntity} from "./post.entity";

@Entity('users')
export class UserEntity extends BaseEntity {
    @Column({
        type: "character varying"
    })
    username: string

    @Column({
        type: "character varying"
    })
    password: string

    @Column({
        type: "character varying"
    })
    firstName?: string

    @Column({
        type: "character varying"
    })
    secondName?: string

    @Column({
        type: "int",
    })
    age: number

    @Column({
        type: "boolean"
    })
    isAdmin: boolean

    @OneToMany(() => PostEntity, (posts) => posts.user)
    posts: PostEntity[]
}