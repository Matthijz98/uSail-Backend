import { IsString, IsEmail } from 'class-validator';

export class CreateBoatDto {
  @IsEmail()
  public email: string;

  @IsString()
  public password: string;
}
