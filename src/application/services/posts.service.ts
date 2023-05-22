import {BaseService} from "./base.service";
import {Repository} from "typeorm";
import {PostEntity} from "../../infrastructure/postgre/entities/post.entity";

export class PostsService extends BaseService {
    private readonly postsRepository: Repository<PostEntity> = this.dataSource.getRepository(PostEntity)
}