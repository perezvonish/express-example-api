import { DataSource } from 'typeorm';
import 'dotenv/config';

const myDataSource = new DataSource({
    type: 'postgres',
    host: process.env.DATABASE_HOST.toString(),
    port: Number(process.env.DATABASE_PORT),
    username: process.env.POSTGRES_USERNAME.toString(),
    password: process.env.DATABASE_PASSWORD.toString(),
    database: process.env.POSTGRES_DATABASE.toString(),
    // entities: entities,
    migrations: [__dirname + '/migrations/*{.ts,.js}'],
    synchronize: false,
});

export default myDataSource;