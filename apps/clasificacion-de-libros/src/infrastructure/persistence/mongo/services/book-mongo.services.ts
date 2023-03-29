import { Injectable } from '@nestjs/common';
import { BookDomainEntity } from 'apps/clasificacion-de-libros/src/domain/entities/book-domain.entity';
import { IBoookDomainService } from 'apps/clasificacion-de-libros/src/domain/services/book.service';
import { from, Observable, of, switchMap } from 'rxjs';

import { BookEntityMongo } from '../entities/book.entity';
import { BookRepository } from '../repositories/book.repository.mongo';

@Injectable()
export class BookMongoService implements IBoookDomainService<BookEntityMongo> {
  constructor(private readonly bookRepository: BookRepository) {}

  /**
   * Este metodo es el encargado de crear un libro
   * usa el observable from para convertir la promesa en un observable
   *
   * @param {BookDomainEntity} bookEntity
   * @return {Observable<BookDomainEntity>} // retorna un observable de un BookEntity
   * @memberof BookMongoService
   */
  createBook(bookEntity: BookDomainEntity): Observable<BookDomainEntity> {
    return from(this.bookRepository.create(bookEntity));
  }
  /**
   * Este metodo es el encargado de buscar un libro por su titulo
   * usa el observable from para convertir la promesa en un observable
   *
   * @param {string} title
   * @return {Observable<BookDomainEntity[]>} // retorna un observable de un array de BookEntity
   * @memberof BookMongoService
   */
  findBookByTitle(title: string): Observable<BookDomainEntity[]> {
    return from(this.bookRepository.findBookByTitle(title));
  }

  deleteBook(id: string): Observable<BookEntityMongo> {
    return from(this.bookRepository.deleteBook(id)).pipe(
      switchMap(() => of(null)),
    );
  }
}
