import { IsDate, IsNotEmpty, IsObject, IsString } from 'class-validator';
import { AuthorDto } from './author.dto';

export class createBookDto {
  @IsString()
  id: string;

  @IsString()
  @IsNotEmpty()
  title: string;

  @IsObject()
  author: AuthorDto[];

  @IsString()
  description: string;

  @IsDate()
  publishedDate?: Date;

  @IsDate()
  createdAt: Date;

  @IsDate()
  updatedAt: Date;
}
