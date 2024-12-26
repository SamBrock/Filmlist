import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiOkResponse } from '@nestjs/swagger';

import { type AuthUser, User } from '../auth/user.decorator';
import { CreateLogDto } from './dto/create-log.dto';
import { LogEntity } from './entity/log.entity';
import { LogsService } from './logs.service';

@Controller('/v1/logs')
export class LogsController {
  constructor(private readonly logsService: LogsService) {}

  @Get('/findUserLogs')
  @ApiOkResponse({ type: LogEntity, isArray: true })
  findUserLogs(@User() user: AuthUser): Promise<LogEntity[]> {
    return this.logsService.findUserLogs(user.userId);
  }

  @Post('/createLog')
  @ApiOkResponse({ type: LogEntity })
  createLog(@Body() logDto: CreateLogDto, @User() user: AuthUser): Promise<LogEntity> {
    return this.logsService.createLog(logDto, 1);
  }
}
