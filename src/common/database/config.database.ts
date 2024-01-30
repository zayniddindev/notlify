import { MysqlConnectionOptions } from 'typeorm/driver/mysql/MysqlConnectionOptions';
import { env } from '../config';
import { SnakeNamingStrategy } from './naming-strategy.database';

export const db_config: MysqlConnectionOptions = {
  type: 'mysql',
  host: env.DB_HOST,
  port: Number(env.DB_PORT),
  username: env.DB_USER,
  password: env.DB_PASSWORD,
  database: env.DB_NAME,
  synchronize: env.DB_SYNC,
  namingStrategy: new SnakeNamingStrategy(),
  entities: ['dist/**/entities/*.js'],
  logger: 'advanced-console',
  logging: ['warn', 'error'],
  maxQueryExecutionTime: 1000,
};
