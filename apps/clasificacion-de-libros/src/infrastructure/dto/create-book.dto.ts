import { IsDate, IsNotEmpty, IsObject, IsString } from 'class-validator';

/**
 * Este dto es el encargado de recibir los datos de un libro para crearlo
 *
 * @param {id} string // el id del libro
 * @param {title} string // el titulo del libro
 * @param {author} string // el autor del libro
 * @param {description} string // la descripcion del libro
 * @param {publishedDate} Date // la fecha de publicacion del libro
 * @param {createdAt} Date // la fecha de creacion del libro
 * @param {updatedAt} Date // la fecha de actualizacion del libro *
 * @export
 * @class createBookDto
 */
export class createBookDto {
  @IsString()
  _id: string;

  @IsString()
  @IsNotEmpty()
  title: string;

  @IsObject()
  author: string;

  @IsString()
  description: string;

  @IsDate()
  publishedDate?: Date;

  @IsDate()
  createdAt: Date;

  @IsDate()
  updatedAt: Date;
}
