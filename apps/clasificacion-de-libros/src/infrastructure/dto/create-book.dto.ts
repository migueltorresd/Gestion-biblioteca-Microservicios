import { ApiProperty } from '@nestjs/swagger';
import {
  IsBoolean,
  IsDate,
  IsNotEmpty,
  IsObject,
  IsString,
} from 'class-validator';

/**
 * Este dto es el encargado de recibir los datos de un libro para crearlo
 * para poder ser utilizados en la capa de infraestructura
 * @export
 * @class createBookDto
 */
export class createBookDto {
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
  _id: string;
  /**
   * Titulo del libro
   *
   * @type {string}
   */
  @ApiProperty({
    example: 'cien años de soledad',
    description: 'Nombre del libro',
  })
  @IsString()
  @IsNotEmpty()
  title: string;

  /**
   * autor del libro en formato de objeto
   *
   * @type {string}
   */
  @ApiProperty({
    example: {
      name: 'Gabriel',
      literaryGenre: 'Realismo',
      birthDate: '1927-03-06T00:00:00.000Z',
    },
    description: 'el autor del libro',
  })
  @IsObject()
  author: string;

  /**
   * descripcion del libro
   *
   * @type {string}
   */
  @ApiProperty({
    example: ' este libro trata sobre la historia de la familia Buendia ',
    description: ' la descripcion del libro',
  })
  @IsString()
  description: string;

  /**
   * fecha de publicacion del libro
   *
   * @type {?Date}
   */
  @ApiProperty({
    example: 'cien años de soledad',
    description: 'Nombre del libro',
  })
  @IsDate()
  publishedDate?: Date;

  /**
   * fecha de creacion del libro
   *
   * @type {Date}
   */
  @ApiProperty({
    example: '2020-11-02T23:00:00.000Z',
    description: 'la fecha de creacion del libro',
  })
  @IsDate()
  createdAt: Date;

  /**
   * estado de prestamo
   *
   * @type {boolean}
   */
  @ApiProperty({
    example: 'true',
    description: 'estado de prestamo',
  })
  @IsBoolean()
  updatedLoad: boolean;
}
