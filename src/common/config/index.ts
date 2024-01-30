import { config } from 'dotenv';
import { bool, cleanEnv, num, str } from 'envalid';
config();

export const env = cleanEnv(process.env, {
  // Server
  PORT: num(),

  // Database
  DB_HOST: str(),
  DB_PORT: num(),
  DB_USER: str(),
  DB_PASSWORD: str(),
  DB_NAME: str(),
  DB_SYNC: bool(),
});
