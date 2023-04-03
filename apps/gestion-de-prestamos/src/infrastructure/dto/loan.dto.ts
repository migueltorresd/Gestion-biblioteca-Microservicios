import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

/**
 * este DTO es el encargado de recibir los datos para actualizar un prestamo
 * usando el metodo updateLoan
 *
 * @export
 * @class UpdateLoanDto
 */
export class UpdateLoanDto {
  /**
   * id del libro
   *
   * @type {string}
   */
  @ApiProperty({
    example: '5f9f1c9c0b9b9c0b9c0b9c0b',
    description: 'se genera automaticamente id',
  })
  @IsString()
  bookId: string;

  /**
   * id del usuario
   *
   * @type {string}
   */
  @ApiProperty({
    example: '5f9f1c9c0b9b9c0b9c0b9c0b',
    description: 'se genera automaticamente id',
  })
  @IsString()
  userId: string;

  /**
   * titulo del libro
   *
   * @type {?string}
   */
  @ApiProperty({
    example: 'cien años de soledad',
    description: 'titulo del libro',
  })
  title?: string;

  /**
   * fecha de prestamo del libro
   *
   * @type {Date}
   */
  @ApiProperty({
    example: '2021-01-01',
    description: 'fecha de prestamo del libro',
  })
  @IsString()
  loanDate: Date;

  /**
   * fecha de devolucion del libro
   *
   * @type {Date}
   */
  @ApiProperty({
    example: '2021-01-01',
    description: 'fecha de devolucion del libro',
  })
  @IsString()
  returnDate: Date;
}
