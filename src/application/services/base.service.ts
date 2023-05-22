import {DataSource} from "typeorm";
import myDataSource from "../../infrastructure/postgre/data-source";

export class BaseService {
    protected readonly dataSource: DataSource = myDataSource;
}