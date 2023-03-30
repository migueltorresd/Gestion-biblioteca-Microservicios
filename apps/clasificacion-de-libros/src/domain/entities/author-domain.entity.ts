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
   * Se crea una instancia de la entidad de autor
   *
   * @Param {id} string // el id del autor
   * @Param {name} string // el nombre del autor
   * @Param {literaryGenre} string // el genero literario del autor
   * @Param {birthDate} Date // la fecha de nacimiento del autor
   * @param {IAuthorDomainInterface} data // los datos de la entidad de autor
   * @memberof AuthorDomainEntity
   */
  constructor(data: IAuthorDomainInterface) {
    this._id = data && data._id;
    this.name = data && data.name;
    this.literaryGenre = data && data.literaryGenre;
    this.birthDate = data && data.birthDate;
  }
}
