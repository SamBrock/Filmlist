import { Injectable } from '@nestjs/common';

import { PrismaService } from '../prisma/prisma.service';
import { CreateLogSchema } from './schema/createLog.schema';

@Injectable()
export class LogsService {
  constructor(private readonly prisma: PrismaService) {}

  // findUserLogs(schema: FindUserLogs) {
  //   return this.prisma.log.findMany({
  //     where: { userId: schema.userId },
  //     include: {
  //       movie: true,
  //     },
  //   });
  // }

  createLog(schema: CreateLogSchema) {
    return this.prisma.log.create({
      data: {
        userId: schema.userId,
        habitId: schema.habitId,
        dateNum: new Date(schema.date).getTime(),
        date: schema.date,
        status: schema.status,
      },
    });
  }
}
