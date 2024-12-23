import { Controller, Get, Post } from '@nestjs/common';

import { UsersService } from './users.service';

@Controller('/v1/users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get('/')
  getUsers() {
    return this.usersService.getUsers();
  }

  @Post('/init')
  initUsers() {
    return this.usersService.init();
  }
}
