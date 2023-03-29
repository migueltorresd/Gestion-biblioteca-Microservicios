import { IsDate, IsString } from 'class-validator';

export class AuthorDto {
  @IsString()
  _id: string;

  @IsString()
  name: string;

  @IsString()
  literaryGenre: string;

  @IsDate()
  birthDate: Date;
}
