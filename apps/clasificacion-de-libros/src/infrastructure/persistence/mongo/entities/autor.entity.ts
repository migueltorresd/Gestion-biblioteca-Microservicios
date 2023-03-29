import { AuthorDomainEntity } from 'apps/clasificacion-de-libros/src/domain/entities/author-domain.entity';
import { Column, Entity, ObjectIdColumn } from 'typeorm';

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
