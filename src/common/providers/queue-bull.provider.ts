import { ExpressAdapter } from '@bull-board/express';
import { BullBoardModuleOptions } from '@bull-board/nestjs';
import { SharedBullAsyncConfiguration } from '@nestjs/bull';
import { ConfigService } from '@nestjs/config';

export const QueueBullProvider: SharedBullAsyncConfiguration = {
  inject: [ConfigService],
  useFactory: (env: ConfigService) => ({
    prefix: `${env.getOrThrow('REDIS_PREFIX')}:bull`,
    redis: {
      host: env.getOrThrow('REDIS_HOST'),
      port: env.getOrThrow<number>('REDIS_PORT'),
      // password: env.getOrThrow('REDIS_PASSWORD'),
    },
  }),
};

export const QueueBullDashboardProvider: BullBoardModuleOptions = {
  adapter: ExpressAdapter,
  route: '/_private/queues-bull',
};
