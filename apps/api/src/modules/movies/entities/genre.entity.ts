import { ApiProperty } from '@nestjs/swagger';

export class GenreEntity {
  @ApiProperty()
  id: number;

  @ApiProperty()
  name?: string;
}
