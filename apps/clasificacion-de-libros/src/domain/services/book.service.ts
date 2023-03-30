import { Observable } from 'rxjs';
import { BookDomainEntity } from '../entities/book-domain.entity';

/**
 * Esta interface representa el servicio de dominio de libro y contiene los metodos
 * que se encargan de crear, buscar y eliminar un libro
 *
 * @export
 * @interface IBoookDomainService
 * @template Entity
 */
export interface IBoookDomainService<
  Entity extends BookDomainEntity = BookDomainEntity,
> {
  /**
   * este metodo se encarga de crear un libro
   *
   * @param {BookDomainEntity} bookEntity
   * @return {Observable<BookDomainEntity>} // retorna un observable de tipo BookDomainEntity
   * @memberof IBoookDomainService
   */
  createBook(bookEntity: BookDomainEntity): Observable<BookDomainEntity>;

  /**
   *  este metodo se encarga de buscar un libro por su id
   *
   * @param {string} query
   * @return {Observable<BookDomainEntity[]>} // retorna un observable de tipo BookDomainEntity[]
   * @memberof IBoookDomainService
   */
  findBookByTitle(query: string): Observable<BookDomainEntity[]>;

  /**
   * este metodo se encarga de eliminar un libro
   *
   * @param {BookDomainEntity} bookEntity
   * @return {Observable<BookDomainEntity>}
   * @memberof IBoookDomainService
   */
  deleteBook(id: string): Observable<BookDomainEntity>;
}
