import { BookDomainEntity } from 'apps/clasificacion-de-libros/src/domain/entities/book-domain.entity';
import { Column, Entity, ObjectIdColumn } from 'typeorm';
import { AuthorEntityMongo } from './autor.entity';
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
