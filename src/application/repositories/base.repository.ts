import {DataSource, Repository} from "typeorm";
import myDataSource from "../../infrastructure/postgre/data-source";

export class BaseRepository<T> {
    protected readonly dataSource: DataSource = myDataSource;
    protected readonly repository: Repository<T>;

    constructor() {
        this.repository = this.dataSource.getRepository(T)
    }
}