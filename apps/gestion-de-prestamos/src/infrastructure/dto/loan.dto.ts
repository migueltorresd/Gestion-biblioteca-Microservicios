import { IsString } from 'class-validator';

export class UpdateLoanDto {
  @IsString()
  bookId: string;

  @IsString()
  userId: string;

  title?: string;

  @IsString()
  loanDate: Date;

  @IsString()
  returnDate: Date;
}
