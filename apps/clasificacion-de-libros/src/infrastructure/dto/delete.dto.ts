import { IsString } from 'class-validator';

export class DeleteBookDto {
  @IsString()
  _id: string;
}
