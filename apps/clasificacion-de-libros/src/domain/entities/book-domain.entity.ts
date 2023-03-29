import { IBookDomainInterface } from './interfaces/book-domain.interface';

/**
 * Esta clase representa la entidad de libro
 * @param {title} string // titulo del libro
 * @param {author} string // autor del libro
 * @param {description} string // descripcion del libro
 * @param {publishedDate} Date // fecha de publicacion del libro
 * @param {createdAt} Date // fecha de creacion del libro
 * @param {updatedAt} Date // fecha de actualizacion del libro
 * @export
 * @class BookDomainEntity
 * @implements {IBookDomainInterface} // implementa la interfaz IBookDomainInterface
 */
export class BookDomainEntity implements IBookDomainInterface {
  author: string;
  description: string;
  publishedDate?: Date;
  createdAt: Date;
  updatedAt: Date;
  title: string;

  /**
   * se crea una instancia de la entidad de libro
   * @param {IBookDomainInterface} data // los datos de la entidad de libro
   * @memberof BookDomainEntity
   */
  constructor(data: IBookDomainInterface) {
    this.author = data.author;
    this.description = data.description;
    this.publishedDate = data.publishedDate;
    this.createdAt = data.createdAt;
    this.updatedAt = data.updatedAt;
    this.title = data.title;
  }
}
