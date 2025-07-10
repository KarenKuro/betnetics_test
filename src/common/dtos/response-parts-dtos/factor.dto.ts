import { Expose, Transform } from "class-transformer";
import { IsNotEmpty, IsNumber, IsOptional, IsPositive, IsString } from "class-validator";

export class FactorDTO {
  @Expose()
  @IsPositive()
  @IsNotEmpty()
  f: number;

  @Expose()
  @IsPositive()
  @IsNotEmpty()
  v: number;

  @Expose()
  @IsNumber()
  @IsOptional()
  @Transform(({ value }) => (value === undefined ? null : value))
  p?: number;

  @Expose()
  @IsString()
  @IsOptional()
  @Transform(({ value }) => (value === undefined ? null : value))
  pt?: string;
}
