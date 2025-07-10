import { Injectable, OnApplicationBootstrap } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';
import { ParserService } from 'src/parser/parser.service';
import { QueueService } from 'src/queue/queue.service';

@Injectable()
export class TaskService implements OnApplicationBootstrap {
  constructor(
    private readonly parseService: ParserService,
    private readonly queueService: QueueService,
  ) {}

  async onApplicationBootstrap() {
    await this.getDataAndAddToQueue();
  }

  // TODO
  /* Можно закэшировать редко меняющиеся данные в том же редисе,
      и при получении здесь, сравнивать кэши. Если ничего не поменялось,
      не ставить задачу в очередь */
  @Cron(CronExpression.EVERY_10_MINUTES)
  async getDataAndAddToQueue(): Promise<void> {
    const { tournamentInfos, sports, events, eventBlocks, customFactors } =
      await this.parseService.parseFonbet();
    await this.queueService.addTournamentsToQueue({ tournamentInfos });
    await this.queueService.addSportsToQueue({ sports });
    await this.queueService.addEventsToQueue({ events });
    if (eventBlocks.length) {
      await this.queueService.addEventBlocksToQueue({ eventBlocks });
    }
    await this.queueService.addCustomFactorsToQueue({ customFactors });
  }
}
