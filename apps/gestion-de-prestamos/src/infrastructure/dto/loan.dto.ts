import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class UpdateLoanDto {
  @ApiProperty({
    example: '5f9f1c9c0b9b9c0b9c0b9c0b',
    description: 'se genera automaticamente id',
  })
  @IsString()
  bookId: string;

  @ApiProperty({
    example: '5f9f1c9c0b9b9c0b9c0b9c0b',
    description: 'se genera automaticamente id',
  })
  @IsString()
  userId: string;

  @ApiProperty({
    example: 'cien años de soledad',
    description: 'titulo del libro',
  })
  title?: string;

  @ApiProperty({
    example: '2021-01-01',
    description: 'fecha de prestamo del libro',
  })
  @IsString()
  loanDate: Date;

  @ApiProperty({
    example: '2021-01-01',
    description: 'fecha de devolucion del libro',
  })
  @IsString()
  returnDate: Date;
}
