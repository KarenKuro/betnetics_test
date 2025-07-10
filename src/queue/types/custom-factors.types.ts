import { CustomFactorsDTO } from '@common/dtos';
import Bull, { Job, Queue } from 'bull';

export interface CustomFactorsPayload {
  customFactors: CustomFactorsDTO[];
}

export type CustomFactorsQueue = Queue<CustomFactorsPayload>;
export type CustomFactorsJob = Job<CustomFactorsPayload>;

export const CustomFactorsJobOptions: Bull.JobOptions = {
  attempts: 10,
  removeOnComplete: true,
  removeOnFail: 100,
  backoff: { type: `exponential`, delay: 500 },
  priority: 40,
};
