import axios from 'axios';
import { plainToInstance } from 'class-transformer';
import { validate } from 'class-validator';

import { Injectable, OnApplicationBootstrap } from '@nestjs/common';

import { FonbetResponseDTO } from '@common/dtos';

@Injectable()
export class ParserService {
  private readonly URL = process.env.URL_TO_PARSE!;

  async parseFonbet(): Promise<FonbetResponseDTO> {
    const response = await axios.get(this.URL);

    // console.log(response.data.tournamentInfos.length);
    // console.log(response.data.sports.length);
    // console.log(response.data.events.length);
    // console.log(response.data.eventBlocks.length);
    // console.log(response.data.customFactors.length);

    const dto = plainToInstance(FonbetResponseDTO, response.data, {
      excludeExtraneousValues: true,
    });

    const errors = await validate(dto, {
      whitelist: true,
    });

    if (errors.length) {
      console.error(errors);
      throw new Error('Некорректные данные от Fonbet');
    }

    return dto;
  }
}
