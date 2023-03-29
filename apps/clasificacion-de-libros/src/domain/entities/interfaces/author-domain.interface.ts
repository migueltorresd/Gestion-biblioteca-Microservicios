/**
 * Esta interfaz define la estructura de un autor
 *
 * @param {string} _id // el id del autor
 * @param {string} name // el nombre del autor
 * @param {string} literaryGenre // el genero literario del autor
 * @param {Date} birthDate // la fecha de nacimiento del autor
 * @export
 * @interface IAuthorDomainInterface
 */
export interface IAuthorDomainInterface {
  _id: string;
  name: string;
  literaryGenre: string;
  birthDate: Date;
}
