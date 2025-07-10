import { InjectQueueBTCS } from '@common/decorators';
import { QueueEnum } from '@common/enums';
import { Injectable } from '@nestjs/common';
import {
  CustomFactorsJobOptions,
  CustomFactorsPayload,
  CustomFactorsQueue,
  EventBlocksJobOptions,
  EventBlocksPayload,
  EventBlocksQueue,
  EventsJobOptions,
  EventsPayload,
  EventsQueue,
  SportsJobOptions,
  SportsPayload,
  SportsQueue,
  TournamentInfoQueue,
  TournamentInfosPayload,
  TournamentsJobOptions,
} from './types';

@Injectable()
export class QueueService {
  constructor(
    @InjectQueueBTCS(QueueEnum.tournamentInfos)
    private readonly tournamentInfosQueue: TournamentInfoQueue,

    @InjectQueueBTCS(QueueEnum.sports)
    private readonly sportsQueue: SportsQueue,

    @InjectQueueBTCS(QueueEnum.events)
    private readonly eventsQueue: EventsQueue,

    @InjectQueueBTCS(QueueEnum.eventBlocks)
    private readonly eventBlocksQueue: EventBlocksQueue,

    @InjectQueueBTCS(QueueEnum.customFactors)
    private readonly customFactorsQueue: CustomFactorsQueue,
  ) {}

  //TODO
  // Наверное корректнее каждый элемент массива отдельно ставить в очередь.
  async addTournamentsToQueue(tournaments: TournamentInfosPayload) {
    await this.tournamentInfosQueue.add(tournaments, TournamentsJobOptions);
  }

  async addSportsToQueue(sports: SportsPayload) {
    await this.sportsQueue.add(sports, SportsJobOptions);
  }

  async addEventsToQueue(events: EventsPayload) {
    await this.eventsQueue.add(events, EventsJobOptions);
  }

  async addEventBlocksToQueue(eventBlocks: EventBlocksPayload) {
    await this.eventBlocksQueue.add(eventBlocks, EventBlocksJobOptions);
  }

  async addCustomFactorsToQueue(customFactors: CustomFactorsPayload) {
    await this.customFactorsQueue.add(customFactors, CustomFactorsJobOptions);
  }
}
