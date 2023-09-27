import { ApiProperty } from '@nestjs/swagger';

export class UpdateProjectDto {
  @ApiProperty()
  title: string;

  @ApiProperty()
  subtitle: string;

  @ApiProperty()
  description: string;

  @ApiProperty()
  keyword: string;

  @ApiProperty()
  image: string;
}
