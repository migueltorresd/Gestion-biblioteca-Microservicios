import { IBookDomainInterface } from './interfaces/book-domain.interface';

/**
 * Esta clase representa la entidad de libro para la capa de dominio
 *
 * @export
 * @class BookDomainEntity
 * @implements {IBookDomainInterface} // implementa la interfaz IBookDomainInterface
 */
export class BookDomainEntity implements IBookDomainInterface {
  /**
   * ID del libro
   *
   * @type {string}
   */
  _id: string;
  /**
   * Autor del libro
   *
   * @type {string}
   */
  author: string;
  /**
   * descripcion del libro
   *
   * @type {string}
   */
  description: string;
  /**
   * fecha de publicacion del libro
   *
   * @type {?Date}
   */
  publishedDate?: Date;
  /**
   * fecha de creacion del libro
   *
   * @type {?Date}
   */
  createdAt?: Date;
  /**
   * fecha de actualizacion del libro
   *
   * @type {?boolean}
   */
  updatedLoad?: boolean;
  /**
   * titulo del libro
   *
   * @type {string}
   */
  title: string;

  /**
   * se crea una instancia de la entidad de libro
   * @param {id} string // id del libro
   * @param {title} string // titulo del libro
   * @param {author} string // autor del libro
   * @param {description} string // descripcion del libro
   * @param {publishedDate} Date // fecha de publicacion del libro
   * @param {createdAt} Date // fecha de creacion del libro
   * @param {updatedLoad} boolean // estado de prestamo
   * @param {IBookDomainInterface} data // los datos de la entidad de libro
   * @memberof BookDomainEntity
   */
  constructor(data: IBookDomainInterface) {
    this._id = data && data._id;
    this.author = data && data.author;
    this.description = data && data.description;
    this.publishedDate = data && data.publishedDate;
    this.createdAt = data && data.createdAt;
    this.updatedLoad = data && data.updatedLoad;
    this.title = data && data.title;
  }
}
