import { BookEntity } from 'apps/clasificacion-de-libros/src/domain/entities/book.entity';
import { Column, ObjectIdColumn } from 'typeorm';

export class BookEntityMongo extends BookEntity {
  @ObjectIdColumn()
  id: string;

  @Column()
  title: string;

  @Column()
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
