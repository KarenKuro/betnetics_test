import { IJoiSchema } from '@common/models';
import * as Joi from 'joi';

export const APP_VALIDATIONS: Joi.ObjectSchema<IJoiSchema> = Joi.object({
  NODE_ENV: Joi.string()
    .valid('development', 'production')
    .default('development'),
  APP_PORT: Joi.number().default(3002),
  APP_NAME: Joi.string().required(),
  URL_TO_PARSE: Joi.string().required(),
  DATABASE_HOST: Joi.string().default('localhost'),
  DATABASE_PORT: Joi.number().default(5432),
  DATABASE_NAME: Joi.string().required(),
  DATABASE_USER: Joi.string().default('root'),
  DATABASE_PASSWORD: Joi.string().required(),
  DATABASE_URI: Joi.string().required(),
  REDIS_PREFIX: Joi.string().required(),
  REDIS_HOST: Joi.string().required(),
  REDIS_PORT: Joi.number().default(6379),
  // REDIS_PASSWORD: Joi.string().required(),
});
