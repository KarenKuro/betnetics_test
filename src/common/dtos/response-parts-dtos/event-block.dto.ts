import { Expose } from 'class-transformer';
import { IsNotEmpty, IsPositive, IsString } from 'class-validator';

export class EventBlockDTO {
  @Expose()
  @IsPositive()
  @IsNotEmpty()
  eventId: number;

  @Expose()
  @IsNotEmpty()
  @IsString()
  state: string;
}
