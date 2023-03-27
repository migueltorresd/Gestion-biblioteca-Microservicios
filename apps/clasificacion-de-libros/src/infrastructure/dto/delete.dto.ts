import { IsString } from 'class-validator';

export class DeleteBookDto {
  @IsString()
  id: string;
}
