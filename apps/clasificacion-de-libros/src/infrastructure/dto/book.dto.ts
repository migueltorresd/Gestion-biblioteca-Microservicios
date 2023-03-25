import { IsDate, IsNotEmpty, IsString } from 'class-validator';

export class createBookDto {
  @IsString()
  id: string;

  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  author: string;

  @IsString()
  description: string;

  @IsDate()
  publishedDate?: Date;

  @IsDate()
  createdAt: Date;

  @IsDate()
  updatedAt: Date;
}
