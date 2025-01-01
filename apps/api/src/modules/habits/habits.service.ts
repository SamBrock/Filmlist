import { Injectable } from '@nestjs/common';

import { PrismaService } from '../prisma/prisma.service';
import { GetUserHabitsSchema } from './schema/getUserHabits.schema';

@Injectable()
export class HabitsService {
  constructor(private readonly prisma: PrismaService) {}

  getUserHabits(input: GetUserHabitsSchema) {
    return this.prisma.habit.findMany({
      where: { userId: input.userId },
    });
  }
}
