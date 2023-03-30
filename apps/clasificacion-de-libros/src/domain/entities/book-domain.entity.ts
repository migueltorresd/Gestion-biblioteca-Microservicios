import { IBookDomainInterface } from './interfaces/book-domain.interface';

/**
 * Esta clase representa la entidad de libro
 * @param {id} string // id del libro
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
  _id: string;
  author: string;
  description: string;
  publishedDate?: Date;
  createdAt: Date;
  updatedAt: Date;
  title: string;

  /**
   * se crea una instancia de la entidad de libro
   * @param {id} string // id del libro
   * @param {title} string // titulo del libro
   * @param {author} string // autor del libro
   * @param {description} string // descripcion del libro
   * @param {publishedDate} Date // fecha de publicacion del libro
   * @param {createdAt} Date // fecha de creacion del libro
   * @param {IBookDomainInterface} data // los datos de la entidad de libro
   * @memberof BookDomainEntity
   */
  constructor(data: IBookDomainInterface) {
    this._id = data && data._id;
    this.author = data && data.author;
    this.description = data && data.description;
    this.publishedDate = data && data.publishedDate;
    this.createdAt = data && data.createdAt;
    this.updatedAt = data && data.updatedAt;
    this.title = data && data.title;
  }
}
