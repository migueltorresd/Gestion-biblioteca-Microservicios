import { IsString } from 'class-validator';

export class CreateUserDto {
  @IsString()
  name: string;

  @IsString()
  email: string;

  @IsString()
  doument: string;

  @IsString()
  phone: string;

  @IsString()
  user: string;

  @IsString()
  password: string;

  @IsString()
  lender: string;
}
