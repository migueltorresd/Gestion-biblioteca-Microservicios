/**
 * Interface para la entidad Book Domain Entity
 *
 * @export
 * @interface BookDomainInterface
 */
export interface IBookDomainInterface {
  /**
   * ID del libro
   *
   * @type {string}
   */
  _id: string;
  /**
   * Titulo del libro
   *
   * @type {string}
   */
  title: string;
  /**
   * Autor del libro
   *
   * @type {string}
   */
  author: string;
  /**
   * Descripcion del libro
   *
   * @type {string}
   */
  description: string;
  /**
   * Fecha de publicacion del libro
   *
   * @type {?Date}
   */
  publishedDate?: Date;
  /**
   * Fecha de creacion del libro
   *
   * @type {?Date}
   */
  createdAt?: Date;
  /**
   * Fecha de actualizacion del libro
   *
   * @type {?boolean}
   */
  updatedLoad?: boolean;
}
