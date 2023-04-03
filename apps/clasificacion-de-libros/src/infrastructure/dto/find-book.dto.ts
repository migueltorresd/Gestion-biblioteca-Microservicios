import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

/**
 * Este dto es el encargado de recibir los datos de un libro para crearlo
 *
 * @param {title} string // el titulo del libro
 * @export
 * @class BookDto
 */
export class BookDto {
  @ApiProperty({
    example: 'cien años de soledad',
    description: 'Nombre del libro',
  })
  @IsString()
  title: string;

  @ApiProperty({
    example: 'Gabriel',
    description: 'Nombre del autor',
  })
  @IsString()
  author: string;
}
