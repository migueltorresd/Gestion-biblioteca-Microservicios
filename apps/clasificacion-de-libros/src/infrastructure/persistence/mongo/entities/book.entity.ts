import { Column, Entity, ObjectIdColumn } from 'typeorm';
import { AuthorEntityMongo } from './autor.entity';
import { BookDomainEntity } from '../../../../../src/domain/entities/book-domain.entity';
/**
 * Es la entidad de la base de datos de mongo para el libro de la biblioteca
 *
 * @export
 * @class BookEntityMongo
 * @extends {BookDomainEntity}
 */
@Entity('book')
export class BookEntityMongo extends BookDomainEntity {
  /**
   * id del libro
   *
   * @type {string}
   */
  @ObjectIdColumn({
    name: '_id',
  })
  _id: string;

  /**
   * titulo del libro
   *
   * @type {string}
   */
  @Column()
  title: string;

  /**
   * autor del libro
   *
   * @type {string}
   */
  @Column((type) => AuthorEntityMongo)
  author: string;

  /**
   * descripcion del libro
   *
   * @type {string}
   */
  @Column()
  description: string;

  /**
   * fecha de publicacion del libro
   *
   * @type {?Date}
   */
  @Column()
  publishedDate?: Date;

  /**
   * fecha de creacion del libro
   *
   * @type {Date}
   */
  @Column()
  createdAt: Date;

  /**
   * fecha de actualizacion del libro
   *
   * @type {?boolean}
   */
  @Column()
  updatedLoad?: boolean;
}
