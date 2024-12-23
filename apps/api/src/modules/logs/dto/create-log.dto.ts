import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsNumber, IsOptional, Max } from 'class-validator';

export class CreateLogDto {
  @ApiProperty()
  @IsNumber()
  movieId: number;

  @ApiProperty()
  @IsOptional()
  @Max(5)
  rating?: number;

  @ApiProperty()
  @IsOptional()
  @IsBoolean()
  liked?: boolean;
}
