import { IsDate, IsString } from 'class-validator';

export class AuthorDto {
  @IsString()
  id: string;

  @IsString()
  name: string;

  @IsString()
  literaryGenre: string;

  @IsDate()
  birthDate: Date;
}
