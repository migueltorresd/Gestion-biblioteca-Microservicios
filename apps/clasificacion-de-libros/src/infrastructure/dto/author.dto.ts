import { IsDate, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

/**
 * Este dto es el encargado de recibir los datos de un autor
 * para poder ser utilizados en la capa de infraestructura
 *
 * @export
 * @class AuthorDto
 */
export class AuthorDto {
  /**
   *  id del autor
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
   * nombre del autor
   *
   * @type {string}
   */
  @ApiProperty({
    example: 'Gabriel',
    description: 'Nombre del autor',
  })
  @IsString()
  name: string;

  /**
   * apellido del autor
   *
   * @type {string}
   */
  @ApiProperty({
    example: 'Realismo',
    description: 'Genero literario del autor',
  })
  @IsString()
  literaryGenre: string;

  /**
   * fecha de nacimiento del autor
   *
   * @type {Date}
   */
  @ApiProperty({
    example: '1927-03-06T00:00:00.000Z',
    description: 'Fecha de nacimiento del autor',
  })
  @IsDate()
  birthDate: Date;
}
