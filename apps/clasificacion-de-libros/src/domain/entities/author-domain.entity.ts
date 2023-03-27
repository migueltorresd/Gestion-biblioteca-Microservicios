/**
 *  esta clase representa la entidad de dominio de un autor
 * @param {string} id // el id del autor
 * @param {string} name // el nombre del autor
 * @param {string} literaryGenre // el genero literario del autor
 * @param {Date} birthDate // la fecha de nacimiento del autor
 * @export
 * @class AuthorDomainEntity
 */
export class AuthorDomainEntity {
  id: string;
  name: string;
  literaryGenre: string;
  birthDate: Date;
}
