import {Column, Entity, ManyToOne} from "typeorm";
import {BaseEntity} from "./base.entity";
import {UserEntity} from "./user.entity";
import {PostModerationEnum} from "../../../application/post-moderation.enum";

@Entity("posts")
export class PostEntity extends BaseEntity {
    @Column({
        type: "character varying"
    })
    text: string

    @ManyToOne(() => UserEntity, (user) => user.posts)
    user: UserEntity

    @Column({
        type: "enum",
        enum: PostModerationEnum,
        default: PostModerationEnum.ON_MODERATION
    })
    moderation: PostModerationEnum
}