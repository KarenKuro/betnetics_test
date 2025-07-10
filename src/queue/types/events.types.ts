import { EventDTO } from '@common/dtos';
import Bull, { Job, Queue } from 'bull';

export interface EventsPayload {
  events: EventDTO[];
}

export type EventsQueue = Queue<EventsPayload>;
export type EventJob = Job<EventsPayload>;

export const EventsJobOptions: Bull.JobOptions = {
  attempts: 5,
  removeOnComplete: true,
  removeOnFail: 100,
  backoff: { type: `exponential`, delay: 500 },
  priority: 10,
};
