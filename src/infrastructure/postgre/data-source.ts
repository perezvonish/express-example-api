import { DataSource } from 'typeorm';
import 'dotenv/config';

const myDataSource = new DataSource({
    migrationsTableName: 'migrations',
    type: 'postgres',
    host: process.env.DATABASE_HOST as string,
    port: Number(process.env.DATABASE_PORT),
    username: process.env.POSTGRES_USERNAME as string,
    password: process.env.POSTGRES_PASSWORD as string,
    database: process.env.POSTGRES_DATABASE as string,
    logging: false,
    synchronize: false,
    name: 'default',
    entities: ['src/**/**.entity{.ts,.js}'],
    migrations: [__dirname + '/migrations/*{.ts,.js}'],
    // subscribers: ['src/subscriber/**/*{.ts,.js}'],
})

export default myDataSource;