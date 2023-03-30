import { IsString } from 'class-validator';

/**
 * Este dto es el encargado de recibir los datos de un libro para eliminarlo
 *
 * @param {id} string // el id del libro
 * @export
 * @class DeleteBookDto
 */
export class DeleteBookDto {
  @IsString()
  _id: string;
}
