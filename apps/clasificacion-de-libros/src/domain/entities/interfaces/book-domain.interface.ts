/**
 * Interface para la entidad Book Domain Entity
 * @param {id} string // id del libro
 * @param {title} string // titulo del libro
 * @param {author} string // autor del libro
 * @param {description} string // descripcion del libro
 * @param {publishedDate} Date // fecha de publicacion del libro
 * @param {createdAt} Date // fecha de creacion del libro
 * @param {updatedAt} Date // fecha de actualizacion del libro
 * @export
 * @interface BookDomainInterface
 */
export interface IBookDomainInterface {
  _id: string;
  title: string;
  author: string;
  description: string;
  publishedDate?: Date;
  createdAt: Date;
  updatedAt: Date;
}
