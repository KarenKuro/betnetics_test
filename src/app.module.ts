import appConfig from '@common/config/app.config';
import dbConfig from '@common/config/db.config';
import { APP_VALIDATIONS } from '@common/validators/env-validation';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ParserModule } from './parser/parser.module';
import { BullBoardModule } from '@bull-board/nestjs';
import {
  QueueBullDashboardProvider,
  QueueBullProvider,
} from '@common/providers/queue-bull.provider';
import { BullModule } from '@nestjs/bull';
import { QueueModule } from './queue/queue.module';
import { ScheduleModule } from '@nestjs/schedule';
import { TaskModule } from './task/task.module';
import { PrismaModule } from './prisma/prisma.module';
import { StorageModule } from './storage/storage.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
      validationSchema: APP_VALIDATIONS,
      load: [appConfig, dbConfig],
    }),
    PrismaModule,
    BullBoardModule.forRoot(QueueBullDashboardProvider),
    BullModule.forRootAsync(QueueBullProvider),
    ScheduleModule.forRoot(),
    TaskModule,
    ParserModule,
    QueueModule,
    PrismaModule,
    StorageModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
