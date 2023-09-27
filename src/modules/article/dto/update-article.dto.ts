import { ApiProperty } from '@nestjs/swagger';

export class UpdateArticleDto {
  @ApiProperty()
  title: string;

  @ApiProperty()
  description: string;

  @ApiProperty()
  keyword: string;

  @ApiProperty()
  image: string;
}
