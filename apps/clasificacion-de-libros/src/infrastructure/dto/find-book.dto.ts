import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

/**
 * Este dto es el encargado de recibir los datos de un libro para crearlo
 * para poder ser utilizados en la capa de infraestructura
 * @export
 * @class BookDto
 */
export class BookDto {
  /**
   * id del libro
   *
   * @type {string}
   */
  @ApiProperty({
    example: 'cien años de soledad',
    description: 'Nombre del libro',
  })
  @IsString()
  title: string;

  /**
   * autor del libro en formato de objeto
   *
   * @type {string}
   */
  @ApiProperty({
    example: 'Gabriel',
    description: 'Nombre del autor',
  })
  @IsString()
  author: string;
}
