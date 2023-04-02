import { Observable } from 'rxjs';
import { BookDomainEntity } from '../entities/book-domain.entity';

/**
 * Esta interface representa el servicio de dominio de libro y contiene los metodos
 * que se encargan de crear, buscar y eliminar un libro
 *
 * @export
 * @interface IBoookDomainService // nombre de la interface
 * @template Entity
 */
export interface IBoookDomainService<
  Entity extends BookDomainEntity = BookDomainEntity,
> {
  /**
   * este metodo se encarga de crear un libro
   *
   * @param {BookDomainEntity} bookEntity // recibe un objeto de tipo BookDomainEntity
   * @return {Observable<BookDomainEntity>} // retorna un observable de tipo BookDomainEntity
   * @memberof IBoookDomainService
   */
  createBook(bookEntity: BookDomainEntity): Observable<BookDomainEntity>;

  /**
   *  este metodo se encarga de buscar un libro por su id
   *
   * @param {string} query // recibe un string que representa el id del libro
   * @return {Observable<BookDomainEntity[]>} // retorna un observable de tipo BookDomainEntity[]
   * @memberof IBoookDomainService
   */
  findBookByTitle(query: string): Observable<BookDomainEntity[]>;

  /**
   * este metodo se encarga de eliminar un libro
   *
   * @param {BookDomainEntity} bookEntity // recibe un objeto de tipo BookDomainEntity
   * @return {Observable<BookDomainEntity>} // retorna un observable de tipo BookDomainEntity
   * @memberof IBoookDomainService
   */
  deleteBook(id: string): Observable<BookDomainEntity>;

  /**
   * Este metodo se encarga de actualizar el estado de un libro
   *
   * @param {string} bookId // recibe un string que representa el id del libro
   * @param {boolean} updates // recibe un booleano que representa el estado del libro
   * @return {Observable<Entity>} // retorna un observable de tipo Entity
   * @memberof IBoookDomainService
   */
  updateLoanStatus(bookId: string, updates: boolean): Observable<Entity>;
}
