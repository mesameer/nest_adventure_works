import { TypeOrmModuleOptions } from "@nestjs/typeorm";

export const dataSource: TypeOrmModuleOptions = {
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'password',
    database: 'adventure_works',
    entities: [
        __dirname + '/../**/*.entity{.ts,.js}',
    ],
    synchronize: Boolean(parseInt(process.env.DB_SYNC)),
}