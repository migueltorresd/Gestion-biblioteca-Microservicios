import { BookEntity } from 'apps/clasificacion-de-libros/src/domain/entities/book.entity';
import { Column, Entity, ObjectIdColumn } from 'typeorm';
import { AuthorEntityMongo } from './autor.entity';
@Entity()
export class BookEntityMongo extends BookEntity {
  @ObjectIdColumn()
  id: string;

  @Column()
  title: string;

  @Column((type) => AuthorEntityMongo)
  author: AuthorEntityMongo[];

  @Column()
  description: string;

  @Column()
  publishedDate?: Date;

  @Column()
  createdAt: Date;

  @Column()
  updatedAt: Date;
}
