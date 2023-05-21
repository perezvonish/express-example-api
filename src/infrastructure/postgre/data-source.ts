import { DataSource } from 'typeorm';
import 'dotenv/config';

const myDataSource = new DataSource({
    migrationsTableName: 'migrations',
    type: 'postgres',
    host: process.env.DATABASE_HOST.toString(),
    port: Number(process.env.DATABASE_PORT),
    username: process.env.POSTGRES_USERNAME.toString(),
    password: process.env.DATABASE_PASSWORD.toString(),
    database: process.env.POSTGRES_DATABASE.toString(),
    logging: false,
    synchronize: false,
    name: 'default',
    entities: ['src/**/**.entity{.ts,.js}'],
    migrations: [__dirname + '/migrations/*{.ts,.js}'],
    // subscribers: ['src/subscriber/**/*{.ts,.js}'],
})

export default myDataSource;