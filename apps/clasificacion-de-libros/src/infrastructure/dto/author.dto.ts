import { IsDate, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

/**
 * Este dto es el encargado de recibir los datos de un autor
 * @param {id} string // el id del autor
 * @param {name} string // el nombre del autor
 * @param {literaryGenre} string // el genero literario del autor
 * @param {birthDate} Date // la fecha de nacimiento del autor *
 * @export
 * @class AuthorDto
 */
export class AuthorDto {
  @ApiProperty({
    example: '5f9f1c9c0b9b9c0b9c0b9c0b',
    description: 'se genera automaticamente id',
  })
  @IsString()
  _id: string;

  @ApiProperty({
    example: 'Gabriel',
    description: 'Nombre del autor',
  })
  @IsString()
  name: string;

  @ApiProperty({
    example: 'Realismo',
    description: 'Genero literario del autor',
  })
  @IsString()
  literaryGenre: string;

  @ApiProperty({
    example: '1927-03-06T00:00:00.000Z',
    description: 'Fecha de nacimiento del autor',
  })
  @IsDate()
  birthDate: Date;
}
