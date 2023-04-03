/**
 * Esta interfaz define la estructura de un autor
 * para poder ser utilizada en la capa de dominio
 *
 * @export
 * @interface IAuthorDomainInterface
 */
export interface IAuthorDomainInterface {
  /**
   * ID del autor
   *
   * @type {string}
   */
  _id: string;
  /**
   * Nombre del autor
   *
   * @type {string}
   */
  name: string;
  /**
   * Apellido del autor
   *
   * @type {string}
   */
  literaryGenre: string;
  /**
   * Fecha de nacimiento del autor
   *
   * @type {Date}
   */
  birthDate: Date;
}
