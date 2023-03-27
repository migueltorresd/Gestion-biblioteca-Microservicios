import { Injectable } from '@nestjs/common';
import { BookEntity } from 'apps/clasificacion-de-libros/src/domain/entities/book.entity';
import { IBoookDomainService } from 'apps/clasificacion-de-libros/src/domain/services/book.service';
import { from, Observable, of, switchMap } from 'rxjs';
import { DeleteBookDto } from '../../../dto/delete.dto';

import { BookEntityMongo } from '../entities/book.entity';
import { BookRepository } from '../repositories/book.repository.mongo';

@Injectable()
export class BookMongoService implements IBoookDomainService<BookEntityMongo> {
  constructor(private readonly bookRepository: BookRepository) {}

  /**
   * Este metodo es el encargado de crear un libro
   * usa el observable from para convertir la promesa en un observable
   *
   * @param {BookEntity} bookEntity
   * @return {Observable<BookEntity>} // retorna un observable de un BookEntity
   * @memberof BookMongoService
   */
  createBook(bookEntity: BookEntity): Observable<BookEntity> {
    return from(this.bookRepository.create(bookEntity));
  }
  /**
   * Este metodo es el encargado de buscar un libro por su titulo
   * usa el observable from para convertir la promesa en un observable
   *
   * @param {string} title
   * @return {Observable<BookEntity[]>} // retorna un observable de un array de BookEntity
   * @memberof BookMongoService
   */
  findBookByTitle(title: string): Observable<BookEntity[]> {
    return from(this.bookRepository.findBookByTitle(title));
  }

  deleteBook(id: string): Observable<BookEntityMongo> {
    return from(this.bookRepository.deleteBook(id)).pipe(
      switchMap(() => of(null)),
    );
  }
}
