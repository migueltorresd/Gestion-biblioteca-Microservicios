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
 *
 * @param {id} string // el id del libro
 * @param {title} string // el titulo del libro
 * @param {author} string // el autor del libro
 * @param {description} string // la descripcion del libro
 * @param {publishedDate} Date // la fecha de publicacion del libro
 * @param {createdAt} Date // la fecha de creacion del libro
 * @param {updatedLoad} boolean // estado de prestamo
 * @export
 * @class createBookDto
 */
export class createBookDto {
  @ApiProperty({
    example: '5f9f1c9c0b9b9c0b9c0b9c0b',
    description: 'se genera automaticamente id',
  })
  @IsString()
  _id: string;
  @ApiProperty({
    example: 'cien años de soledad',
    description: 'Nombre del libro',
  })
  @IsString()
  @IsNotEmpty()
  title: string;

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

  @ApiProperty({
    example: ' este libro trata sobre la historia de la familia Buendia ',
    description: ' la descripcion del libro',
  })
  @IsString()
  description: string;

  @ApiProperty({
    example: 'cien años de soledad',
    description: 'Nombre del libro',
  })
  @IsDate()
  publishedDate?: Date;

  @ApiProperty({
    example: '2020-11-02T23:00:00.000Z',
    description: 'la fecha de creacion del libro',
  })
  @IsDate()
  createdAt: Date;

  @ApiProperty({
    example: 'true',
    description: 'estado de prestamo',
  })
  @IsBoolean()
  updatedLoad: boolean;
}
