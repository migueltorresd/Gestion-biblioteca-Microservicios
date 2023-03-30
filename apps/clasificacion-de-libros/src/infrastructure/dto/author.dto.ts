import { IsDate, IsString } from 'class-validator';

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
  @IsString()
  _id: string;

  @IsString()
  name: string;

  @IsString()
  literaryGenre: string;

  @IsDate()
  birthDate: Date;
}
