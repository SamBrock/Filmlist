import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ApiOkResponse } from '@nestjs/swagger';

import { type AuthUser, User } from '../auth/user.decorator';
import { CreateLogDto } from './dto/create-log.dto';
import { LogEntity } from './entity/log.entity';
import { LogsService } from './logs.service';

@Controller('/v1/:username/logs')
export class LogsController {
  constructor(private readonly logsService: LogsService) {}

  @Get('/')
  @ApiOkResponse({ type: LogEntity, isArray: true })
  find(@Param('username') username: string, @User() user: AuthUser): Promise<LogEntity[]> {
    return this.logsService.findUserLogs(user.userId);
  }

  @Post('/')
  create(@Param('username') username: string, @Body() logDto: CreateLogDto, @User() user: AuthUser) {
    return this.logsService.createUserLog(logDto, { userId: 1, username: 'sambrock' });
  }
}
