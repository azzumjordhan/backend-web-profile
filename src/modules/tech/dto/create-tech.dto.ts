import { ApiProperty } from '@nestjs/swagger';

export class CreateTechDto {
  @ApiProperty()
  name_tech: string;

  @ApiProperty()
  type: string;

  @ApiProperty()
  picture: string;

  @ApiProperty()
  priority: number;
}
