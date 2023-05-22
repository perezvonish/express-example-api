import {BaseService} from "./base.service";
import {UserEntity} from "../../infrastructure/postgre/entities/user.entity";
import {Repository} from "typeorm";

export class UsersService extends BaseService {
    private readonly userRepository: Repository<UserEntity> = this.dataSource.getRepository(UserEntity)
}