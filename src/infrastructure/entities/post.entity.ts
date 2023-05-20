import {Column, Entity} from "typeorm";
import {BaseEntity} from "./base.entity";

@Entity("posts")
export class PostEntity extends BaseEntity {
    @Column()
    text: string
}