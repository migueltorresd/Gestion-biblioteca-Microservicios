import { Observable } from 'rxjs';
import { BookEntity } from '../entities/book.entity';

export interface IBoookDomainService<Entity extends BookEntity = BookEntity> {
  /**
   * este metodo se encarga de crear un libro
   *
   * @param {BookEntity} bookEntity
   * @return {Observable<BookEntity>} // retorna un observable de tipo BookEntity
   * @memberof IBoookDomainService
   */
  createBook(bookEntity: BookEntity): Observable<BookEntity>;

  /**
   *  este metodo se encarga de buscar un libro por su id
   *
   * @param {string} query
   * @return {Observable<BookEntity[]>} // retorna un observable de tipo BookEntity[]
   * @memberof IBoookDomainService
   */
  findBookByTitle(query: string): Observable<BookEntity[]>;
  // updateBook(bookEntity: BookEntity): Observable<BookEntity>;

  /**
   * este metodo se encarga de eliminar un libro
   *
   * @param {BookEntity} bookEntity
   * @return {Observable<BookEntity>}
   * @memberof IBoookDomainService
   */
  deleteBook(id: string): Observable<BookEntity>;
}
