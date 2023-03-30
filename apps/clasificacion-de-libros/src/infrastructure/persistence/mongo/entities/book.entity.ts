import { BookDomainEntity } from 'apps/clasificacion-de-libros/src/domain/entities/book-domain.entity';
import { Column, Entity, ObjectIdColumn } from 'typeorm';
import { AuthorEntityMongo } from './autor.entity';
/**
 * Es la entidad de la base de datos de mongo para el libro de la biblioteca
 *
 * @Param {_Iid} _id // con esto se puede especificar el id de la entidad
 * @Param {title} title // con esto se puede especificar el titulo del libro
 * @Param {author} author // con esto se puede especificar el autor del libro
 * @Param {description} description // con esto se puede especificar la descripcion del libro
 * @Param {publishedDate} publishedDate // con esto se puede especificar la fecha de publicacion del libro
 * @Param {createdAt} createdAt // con esto se puede especificar la fecha de creacion del libro
 * @export
 * @class BookEntityMongo
 * @extends {BookDomainEntity}
 */
@Entity()
export class BookEntityMongo extends BookDomainEntity {
  @ObjectIdColumn()
  _id: string;

  @Column()
  title: string;

  @Column((type) => AuthorEntityMongo)
  author: string;

  @Column()
  description: string;

  @Column()
  publishedDate?: Date;

  @Column()
  createdAt: Date;

  @Column()
  updatedAt: Date;
}
