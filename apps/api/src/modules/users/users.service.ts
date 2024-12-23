import { Injectable } from '@nestjs/common';

import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService) {}

  getUsers() {
    return this.prisma.user.findMany();
  }

  init() {
    return this.prisma.user.create({
      data: {
        email: 'sambrock@example.com',
        username: 'sambrock',
        password: 'password',
      },
    });
  }
}
