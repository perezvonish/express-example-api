import {BaseRepository} from "./base.repository";
import {UserEntity} from "../../infrastructure/postgre/entities/user.entity";

export class UsersRepository extends BaseRepository<UserEntity>{
    constructor() {
        super();
    }
}