export interface IJoiSchema {
  NODE_ENV: string;
  APP_PORT: number;
  APP_NAME: string;
  URL_TO_PARSE: string;
  DATABASE_HOST: string;
  DATABASE_PORT: number;
  DATABASE_NAME: string;
  DATABASE_USER: string;
  DATABASE_PASSWORD: string;
  DATABASE_URI: string;
  REDIS_PREFIX: string;
  REDIS_HOST: string;
  REDIS_PORT: number;
  REDIS_PASSWORD: string;
}
