import {BaseRepository} from "./base.repository";
import {PostEntity} from "../../infrastructure/postgre/entities/post.entity";

export class PostsRepository extends BaseRepository<PostEntity> {
    constructor() {
        super();
    }
}