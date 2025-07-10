import { Expose, Transform } from 'class-transformer';
import {
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsPositive,
  IsString,
} from 'class-validator';

export class EventDTO {
  @Expose()
  @IsPositive()
  @IsNotEmpty()
  id: number;

  @Expose()
  @IsNumber()
  @IsOptional()
  @Transform(({ value }) => (value === undefined ? null : value))
  parentId?: number;

  @Expose()
  @IsNotEmpty()
  @IsString()
  sortOrder: string;

  @Expose()
  @IsPositive()
  @IsNotEmpty()
  level: number;

  @Expose()
  @IsPositive()
  @IsNotEmpty()
  num: number;

  @Expose()
  @IsPositive()
  @IsNotEmpty()
  sportId: number;

  @Expose()
  @IsPositive()
  @IsNotEmpty()
  kind: number;

  @Expose()
  @IsPositive()
  @IsNotEmpty()
  rootKind: number;

  @Expose()
  @IsNumber()
  @IsOptional()
  @Transform(({ value }) => (value === undefined ? null : value))
  team1Id?: number;

  @Expose()
  @IsNumber()
  @IsOptional()
  @Transform(({ value }) => (value === undefined ? null : value))
  team2Id?: number;

  @Expose()
  @IsString()
  @IsOptional()
  @Transform(({ value }) => (value === undefined ? null : value))
  team1?: string;

  @Expose()
  @IsString()
  @IsOptional()
  @Transform(({ value }) => (value === undefined ? null : value))
  team2?: string;

  @Expose()
  @IsString()
  name: string;

  @Expose()
  @IsNumber()
  @IsNotEmpty()
  startTime: number;

  @Expose()
  @IsNotEmpty()
  @IsString()
  place: string;

  @Expose()
  @IsNumber()
  @IsNotEmpty()
  priority: number;
}
