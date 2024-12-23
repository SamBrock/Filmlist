import { ApiProperty } from '@nestjs/swagger';

export class MovieEntity {
  @ApiProperty()
  title: number;
}
