import { Injectable } from '@nestjs/common';
import { BookDomainEntity } from 'apps/clasificacion-de-libros/src/domain/entities/book-domain.entity';
import { IBoookDomainService } from 'apps/clasificacion-de-libros/src/domain/services/book.service';
import { from, map, Observable, of, switchMap } from 'rxjs';

import { BookEntityMongo } from '../entities/book.entity';
import { BookRepository } from '../repositories/book.repository.mongo';

/**
 * Este servicio se encarga de la persistencia de los libros qen la base de datos
 *
 * @export
 * @class BookMongoService // servicio de persistencia de libros
 * @implements {IBoookDomainService<BookEntityMongo>}
 */
@Injectable()
export class BookMongoService implements IBoookDomainService<BookEntityMongo> {
  constructor(private readonly bookRepository: BookRepository) {}

  /**
   * Este metodo es el encargado de crear un libro
   * usa el observable from para convertir la promesa en un observable
   *
   * @param {BookDomainEntity} bookEntity // libro a crear
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
   * @param {string} title // titulo del libro a buscar
   * @return {Observable<BookDomainEntity[]>} // retorna un observable de un array de BookEntity
   * @memberof BookMongoService
   */
  findBookByTitle(title: string): Observable<BookDomainEntity[]> {
    return from(this.bookRepository.findBookByTitle(title));
  }

  /**
   * Este metodo es el encargado de eliminar un libro por su id y retorna un observable de null
   * porque el metodo deleteBook del repositorio retorna un void
   * @param {string} id // id del libro a eliminar
   * @return {Observable<BookEntityMongo>}
   * @memberof BookMongoService
   */
  deleteBook(id: string): Observable<BookEntityMongo> {
    return from(this.bookRepository.deleteBook(id)).pipe(
      switchMap(() => of(null)),
    );
  }

  updateLoanStatus(
    bookId: string,
    updatedLoan: Partial<BookEntityMongo>,
  ): Observable<BookEntityMongo> {
    const updatePromise = this.bookRepository.updateLoanStatus(
      bookId,
      updatedLoan,
    );
    return from(updatePromise).pipe(
      map((updatedBook) => updatedBook as BookEntityMongo),
    );
  }
}
