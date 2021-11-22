import { IsString, IsDate } from 'class-validator';

export class CreateBoatDto {
  @IsString()
  public name: string;

  @IsString()
  public image: string;

  @IsDate()
  public createdAt: Date;

  @IsDate()
  public updatedAt: Date;
}
