import { IsString } from 'class-validator';

/**
 * Este dto es el encargado de recibir los datos de un libro para crearlo
 *
 * @param {title} string // el titulo del libro
 * @export
 * @class BookDto
 */
export class BookDto {
  @IsString()
  title: string;
  @IsString()
  author: string;
}
