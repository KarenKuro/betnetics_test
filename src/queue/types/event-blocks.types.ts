import { EventBlockDTO } from '@common/dtos';
import Bull, { Job, Queue } from 'bull';

export interface EventBlocksPayload {
  eventBlocks: EventBlockDTO[];
}

export type EventBlocksQueue = Queue<EventBlocksPayload>;
export type EventBlocksJob = Job<EventBlocksPayload>;

export const EventBlocksJobOptions: Bull.JobOptions = {
  attempts: 5,
  removeOnComplete: true,
  removeOnFail: 100,
  backoff: { type: `exponential`, delay: 500 },
  priority: 20,
};
