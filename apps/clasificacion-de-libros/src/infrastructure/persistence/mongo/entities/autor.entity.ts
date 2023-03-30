import { AuthorDomainEntity } from 'apps/clasificacion-de-libros/src/domain/entities/author-domain.entity';
import { Column, Entity, ObjectIdColumn } from 'typeorm';

/**
 * Es la entidad de la base de datos de mongo para el autor del libro
 *
 * @Param {_Iid} _id // con esto se puede especificar el id de la entidad
 * @Param {name} name // con esto se puede especificar el nombre del autor
 * @Param {literaryGenre} literaryGenre // con esto se puede especificar el genero literario del autor
 * @Param {birthDate} birthDate // con esto se puede especificar la fecha de nacimiento del autor
 * @export
 * @class AuthorEntityMongo
 * @extends {AuthorDomainEntity}
 */
@Entity()
export class AuthorEntityMongo extends AuthorDomainEntity {
  @ObjectIdColumn()
  _id: string;

  @Column()
  name: string;

  @Column()
  literaryGenre: string;

  @Column()
  birthDate: Date;
}
