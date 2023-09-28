import { ApiProperty } from '@nestjs/swagger';

export class UpdateTechDto {
  @ApiProperty()
  name_tech: string;

  @ApiProperty()
  type: string;

  @ApiProperty()
  picture: string;

  @ApiProperty()
  priority: number;
}
