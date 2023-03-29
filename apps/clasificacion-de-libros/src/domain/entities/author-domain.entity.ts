import { IAuthorDomainInterface } from './interfaces/author-domain.interface';

/**
 * Esta clase representa la entidad de autor
 * @param {id} string // el id del autor
 * @param {name} string // el nombre del autor
 * @param {literaryGenre} string // el genero literario del autor
 * @param {birthDate} Date // la fecha de nacimiento del autor
 * @export
 * @class AuthorDomainEntity
 * @implements {IAuthorDomainInterface} // implementa la interfaz IAuthorDomainInterface
 */
export class AuthorDomainEntity implements IAuthorDomainInterface {
  _id: string;
  name: string;
  literaryGenre: string;
  birthDate: Date;

  /**
   * se crea una instancia de la entidad de autor
   * @param {IAuthorDomainInterface} data // los datos de la entidad de autor
   * @memberof AuthorDomainEntity
   */
  constructor(data: IAuthorDomainInterface) {
    if (data) {
      this._id = data._id;
      this.name = data.name;
      this.literaryGenre = data.literaryGenre;
      this.birthDate = data.birthDate;
    }
  }
}
