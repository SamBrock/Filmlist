import { Injectable } from '@nestjs/common';

import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class WatchlistsService {
  constructor(private readonly prisma: PrismaService) {}

  initWatchlist() {
    return this.prisma.watchlist.create({
      data: {
        userId: 1,
      },
    });
  }
}
