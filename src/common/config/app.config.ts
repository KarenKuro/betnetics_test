import { IAppConfig } from '@common/models';
import { registerAs } from '@nestjs/config';

export default registerAs(
  'APP_CONFIG',
  (): IAppConfig => ({
    APP_NAME: process.env.APP_NAME!,
    APP_PORT: +process.env.APP_PORT!,
    NODE_ENV: process.env.NODE_ENV!,
    URL_TO_PARSE: process.env.URL_TO_PARSE!,
  }),
);
