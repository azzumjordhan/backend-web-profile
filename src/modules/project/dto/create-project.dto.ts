import { ApiProperty } from '@nestjs/swagger';

export class CreateProjectDto {
  @ApiProperty()
  title: string;

  @ApiProperty()
  subtitle: string;

  @ApiProperty()
  description: string;

  @ApiProperty()
  keyword: string;

  @ApiProperty()
  photo: string;
}
