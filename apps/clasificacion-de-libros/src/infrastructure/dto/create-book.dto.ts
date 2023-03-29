import { IsDate, IsNotEmpty, IsObject, IsString } from 'class-validator';

export class createBookDto {
  @IsString()
  _id: string;

  @IsString()
  @IsNotEmpty()
  title: string;

  @IsObject()
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
