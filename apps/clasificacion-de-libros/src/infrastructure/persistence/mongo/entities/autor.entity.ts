import { AuthorDomainEntity } from '../../../../domain/entities';
import { Column, Entity, ObjectIdColumn } from 'typeorm';

/**
 * Es la entidad de la base de datos de mongo para el autor del libro
 *
 *
 * @export
 * @class AuthorEntityMongo
 * @extends {AuthorDomainEntity}
 */
@Entity()
export class AuthorEntityMongo extends AuthorDomainEntity {
  /**
   * id del autor
   *
   * @type {string}
   */
  @ObjectIdColumn()
  _id: string;

  /**
   * nombre del autor
   *
   * @type {string}
   */
  @Column()
  name: string;

  /**
   * genero literario del autor
   *
   * @type {string}
   */
  @Column()
  literaryGenre: string;

  /**
   * fecha de nacimiento del autor
   *
   * @type {Date}
   */
  @Column()
  birthDate: Date;
}
