import { Expose, Transform } from 'class-transformer';
import { IsNotEmpty, IsOptional, IsPositive, IsString } from 'class-validator';

export class SportDTO {
  @Expose()
  @IsPositive()
  @IsNotEmpty()
  id: number;

  @Expose()
  @IsPositive()
  @IsOptional()
  @Transform(({ value }) => (value === undefined ? null : value))
  parentId?: number;

  @Expose()
  @IsNotEmpty()
  @IsString()
  kind: string;

  @Expose()
  @IsPositive()
  @IsOptional()
  @Transform(({ value }) => (value === undefined ? null : value))
  regionId?: number;

  @Expose()
  @IsNotEmpty()
  @IsString()
  sortOrder: string;

  @Expose()
  @IsNotEmpty()
  @IsString()
  name: string;

  @Expose()
  @IsOptional()
  @IsString()
  @Transform(({ value }) => (value === undefined ? null : value))
  searchKeyWords?: string;

  @Expose()
  @IsPositive()
  @IsOptional()
  @Transform(({ value }) => (value === undefined ? null : value))
  tournamentInfoId?: number;

  @Expose()
  @IsPositive()
  @IsOptional()
  @Transform(({ value }) => (value === undefined ? null : value))
  sportCategoryId?: number;

  @Expose()
  @IsPositive()
  @IsOptional()
  @Transform(({ value }) => (value === undefined ? null : value))
  geoCategoryId?: number;
}
