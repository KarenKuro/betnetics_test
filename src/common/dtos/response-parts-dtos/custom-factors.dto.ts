import { Expose, Type } from 'class-transformer';
import {
  IsArray,
  IsNotEmpty,
  IsPositive,
  ValidateNested,
} from 'class-validator';

import { FactorDTO } from './factor.dto';

export class CustomFactorsDTO {
  @Expose()
  @IsPositive()
  @IsNotEmpty()
  e: number;

  @Expose()
  @IsPositive()
  @IsNotEmpty()
  countAll: number;

  @Expose()
  @ValidateNested({ each: true })
  @Type(() => FactorDTO)
  @IsArray()
  factors: FactorDTO[];
}
