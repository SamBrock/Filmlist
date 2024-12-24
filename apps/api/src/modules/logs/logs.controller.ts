import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiOkResponse } from '@nestjs/swagger';

import { type AuthUser, User } from '../auth/user.decorator';
import { CreateLogDto } from './dto/create-log.dto';
import { LogEntity } from './entity/log.entity';
import { LogsService } from './logs.service';

@Controller('/v1/logs')
export class LogsController {
  constructor(private readonly logsService: LogsService) {}

  @Get('/find')
  @ApiOkResponse({ type: LogEntity, isArray: true })
  find(@User() user: AuthUser): Promise<LogEntity[]> {
    return this.logsService.findUserLogs(user.userId);
  }

  @Post('/create')
  create(@Body() logDto: CreateLogDto, @User() user: AuthUser) {
    return this.logsService.createLog(logDto, user.userId || 1);
  }
}
