import { OnQueueFailed, Process, Processor } from '@nestjs/bull';
import { Job } from 'bull';
import { QueueEnum } from '@common/enums';
import {
  TournamentInfosPayload,
  SportsPayload,
  EventsPayload,
  EventBlocksPayload,
  CustomFactorsPayload,
} from './types';
import { StorageService } from 'src/storage/storage.service';

// TODO
/* В принципе, можно обрабатывать одним процессором, в котором с помошью switch case
 разделить разные очереди, но так, как будто нагляднее */
@Processor(QueueEnum.tournamentInfos)
export class TournamentInfoProcessor {
  constructor(private readonly storageService: StorageService) {}

  // TODO
  // Можно сразу все сохранить с помошью Bulk Upsert через Raw SQL,
  // будет быстрее.
  @Process()
  async handleTournamentInfo(job: Job<TournamentInfosPayload>): Promise<void> {
    for (const tournament of job.data.tournamentInfos) {
      await this.storageService.saveTournament(tournament);
    }
  }
}

@Processor(QueueEnum.sports)
export class SportsProcessor {
  constructor(private readonly storageService: StorageService) {}

  @Process()
  async handleSports(job: Job<SportsPayload>): Promise<void> {
    for (const sport of job.data.sports) {
      await this.storageService.saveSport(sport);
    }
  }
}

@Processor(QueueEnum.events)
export class EventsProcessor {
  constructor(private readonly storageService: StorageService) {}

  @Process()
  async handleEvents(job: Job<EventsPayload>): Promise<void> {
    for (const event of job.data.events) {
      await this.storageService.saveEvent(event);
    }
  }
}

@Processor(QueueEnum.eventBlocks)
export class EventBlocksProcessor {
  constructor(private readonly storageService: StorageService) {}

  @Process()
  async handleEventBlocks(job: Job<EventBlocksPayload>): Promise<void> {
    for (const eventBlock of job.data.eventBlocks) {
      await this.storageService.saveEventBlock(eventBlock);
    }
  }
}

@Processor(QueueEnum.customFactors)
export class CustomFactorsProcessor {
  constructor(private readonly storageService: StorageService) {}

  @Process()
  async handleCustomFactors(job: Job<CustomFactorsPayload>): Promise<void> {
    for (const customFactors of job.data.customFactors) {
      await this.storageService.saveCustomFactors(customFactors);
    }
  }
}
