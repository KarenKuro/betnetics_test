import {
  CustomFactorsDTO,
  EventBlockDTO,
  EventDTO,
  SportDTO,
  TournamentInfoDTO,
} from '@common/dtos';
import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class StorageService {
  constructor(private readonly prisma: PrismaService) {}

  async saveTournament(data: TournamentInfoDTO): Promise<void> {
    await this.prisma.tournamentInfo.upsert({
      where: { id: data.id },
      update: {
        caption: data.caption,
      },
      create: {
        id: data.id,
        caption: data.caption,
      },
    });
  }

  async saveSport(data: SportDTO): Promise<void> {
    await this.prisma.sport.upsert({
      where: { id: data.id },
      create: {
        id: data.id,
        parentId: data.parentId ?? null,
        kind: data.kind,
        regionId: data.regionId ?? null,
        sortOrder: data.sortOrder,
        name: data.name,
        searchKeyWords: data.searchKeyWords ?? null,
        tournamentInfoId: data.tournamentInfoId ?? null,
        sportCategoryId: data.sportCategoryId ?? null,
        geoCategoryId: data.geoCategoryId ?? null,
      },
      update: {
        parentId: data.parentId ?? null,
        kind: data.kind,
        regionId: data.regionId ?? null,
        sortOrder: data.sortOrder,
        name: data.name,
        searchKeyWords: data.searchKeyWords ?? null,
        tournamentInfoId: data.tournamentInfoId ?? null,
        sportCategoryId: data.sportCategoryId ?? null,
        geoCategoryId: data.geoCategoryId ?? null,
      },
    });
  }

  async saveEvent(data: EventDTO): Promise<void> {
    await this.prisma.event.upsert({
      where: { id: data.id },
      create: {
        id: data.id,
        parentId: data.parentId ?? null,
        sortOrder: data.sortOrder,
        level: data.level,
        num: data.num,
        sportId: data.sportId,
        kind: data.kind,
        rootKind: data.rootKind,
        team1Id: data.team1Id ?? null,
        team2Id: data.team2Id ?? null,
        team1: data.team1 ?? null,
        team2: data.team2 ?? null,
        name: data.name,
        startTime: data.startTime,
        place: data.place,
        priority: data.priority,
      },
      update: {
        parentId: data.parentId ?? null,
        sortOrder: data.sortOrder,
        level: data.level,
        num: data.num,
        sportId: data.sportId,
        kind: data.kind,
        rootKind: data.rootKind,
        team1Id: data.team1Id ?? null,
        team2Id: data.team2Id ?? null,
        team1: data.team1 ?? null,
        team2: data.team2 ?? null,
        name: data.name,
        startTime: data.startTime,
        place: data.place,
        priority: data.priority,
      },
    });
  }

  async saveEventBlock(data: EventBlockDTO): Promise<void> {
    await this.prisma.eventBlocks.upsert({
      where: { eventId: data.eventId },
      create: {
        eventId: data.eventId,
        state: data.state,
      },
      update: {
        state: data.state,
      },
    });
  }

  async saveCustomFactors(data: CustomFactorsDTO): Promise<void> {
    const plainFactors = data.factors.map((f) => ({
      f: f.f,
      v: f.v,
      p: f.p ?? null,
      pt: f.pt ?? null,
    }));

    await this.prisma.customFactors.upsert({
      where: { e: data.e },
      create: {
        e: data.e,
        countAll: data.countAll,
        factors: plainFactors,
      },
      update: {
        countAll: data.countAll,
        factors: plainFactors,
      },
    });
  }
}
