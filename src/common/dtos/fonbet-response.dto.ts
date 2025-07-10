import { Expose, Type } from 'class-transformer';
import {
  CustomFactorsDTO,
  EventBlockDTO,
  EventDTO,
  SportDTO,
  TournamentInfoDTO,
} from './response-parts-dtos';
import { IsArray, ValidateNested } from 'class-validator';

export class FonbetResponseDTO {
  @Expose()
  @ValidateNested({ each: true })
  @Type(() => TournamentInfoDTO)
  @IsArray()
  tournamentInfos: TournamentInfoDTO[];

  @Expose()
  @ValidateNested({ each: true })
  @Type(() => SportDTO)
  @IsArray()
  sports: SportDTO[];

  @Expose()
  @ValidateNested({ each: true })
  @Type(() => EventDTO)
  @IsArray()
  events: EventDTO[];

  @Expose()
  @ValidateNested({ each: true })
  @Type(() => EventBlockDTO)
  @IsArray()
  eventBlocks: EventBlockDTO[];

  @Expose()
  @ValidateNested({ each: true })
  @Type(() => CustomFactorsDTO)
  @IsArray()
  customFactors: CustomFactorsDTO[];
}
