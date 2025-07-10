import { TournamentInfoDTO } from '@common/dtos';
import Bull, { Job, Queue } from 'bull';

export interface TournamentInfosPayload {
  tournamentInfos: TournamentInfoDTO[];
}

export type TournamentInfoQueue = Queue<TournamentInfosPayload>;
export type TournamentInfoJob = Job<TournamentInfosPayload>;

export const TournamentsJobOptions: Bull.JobOptions = {
  attempts: 5,
  removeOnComplete: true,
  removeOnFail: 100,
  backoff: { type: `exponential`, delay: 500 },
  priority: 1,
};
