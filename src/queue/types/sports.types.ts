import { SportDTO } from '@common/dtos';
import Bull, { Job, Queue } from 'bull';

export interface SportsPayload {
  sports: SportDTO[];
}

export type SportsQueue = Queue<SportsPayload>;
export type SportsJob = Job<SportsPayload>;

export const SportsJobOptions: Bull.JobOptions = {
  attempts: 5,
  removeOnComplete: true,
  removeOnFail: 100,
  backoff: { type: `exponential`, delay: 500 },
  priority: 5,
};
