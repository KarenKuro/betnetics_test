import { BullBoardModule } from '@bull-board/nestjs';
import { QueueEnum } from '@common/enums';
import { BullModule } from '@nestjs/bull';
import { Module } from '@nestjs/common';
import { BullAdapter } from '@bull-board/api/bullAdapter';
import { QueueService } from './queue.service';
import {
  CustomFactorsProcessor,
  EventBlocksProcessor,
  EventsProcessor,
  SportsProcessor,
  TournamentInfoProcessor,
} from './queue.processors';
import { StorageModule } from 'src/storage/storage.module';

@Module({
  imports: [
    BullModule.registerQueue(
      { name: QueueEnum.tournamentInfos },
      { name: QueueEnum.sports },
      { name: QueueEnum.events },
      { name: QueueEnum.eventBlocks },
      { name: QueueEnum.customFactors },
    ),
    BullBoardModule.forFeature(
      { name: QueueEnum.tournamentInfos, adapter: BullAdapter },
      { name: QueueEnum.sports, adapter: BullAdapter },
      { name: QueueEnum.events, adapter: BullAdapter },
      { name: QueueEnum.eventBlocks, adapter: BullAdapter },
      { name: QueueEnum.customFactors, adapter: BullAdapter },
    ),
    StorageModule,
  ],
  providers: [
    QueueService,
    TournamentInfoProcessor,
    SportsProcessor,
    EventsProcessor,
    EventBlocksProcessor,
    CustomFactorsProcessor,
  ],
  exports: [QueueService],
})
export class QueueModule {}
