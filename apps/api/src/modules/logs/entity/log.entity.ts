import { ApiProperty } from '@nestjs/swagger';
import { Log } from '@prisma/client';

export class LogEntity implements Log {
  @ApiProperty()
  id: number;

  @ApiProperty()
  movieId: number;

  @ApiProperty()
  rating: number;

  @ApiProperty()
  liked: boolean;

  @ApiProperty()
  userId: number;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;
}
