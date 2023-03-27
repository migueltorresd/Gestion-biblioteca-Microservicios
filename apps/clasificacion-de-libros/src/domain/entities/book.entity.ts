import { AuthorDomainEntity } from './author-domain.entity';

/**
 * Esta clase representa la entidad de libro
 *
 * @export
 * @param {id} string // id del libro
 * @param {title} string // titulo del libro
 * @param {author} string // autor del libro
 * @param {description} string // descripcion del libro
 * @param {publishedDate} Date // fecha de publicacion del libro
 * @param {createdAt} Date // fecha de creacion del libro
 * @param {updatedAt} Date // fecha de actualizacion del libro
 * @interface Book
 */
export class BookEntity {
  id: string;
  title: string;
  author: AuthorDomainEntity[];
  description: string;
  publishedDate?: Date;
  createdAt: Date;
  updatedAt: Date;
}
