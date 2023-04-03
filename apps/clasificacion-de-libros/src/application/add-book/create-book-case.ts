import { Observable } from 'rxjs';
import { BookDomainEntity } from '../../domain/entities/book-domain.entity';
import { IBoookDomainService } from '../../domain/services/book.service';

/**
 * Este caso de uso se encarga de crear un libro en la base de datos
 *
 * @export
 * @class createBookUseCase
 */
export class CreateBookUseCase {
  /**
   * se crea constructor de la clase y se le asigna el servicio de libro
   *
   * @constructor
   * @param {IBoookDomainService} bookService
   */
  constructor(private readonly bookService: IBoookDomainService) {}

  /**
   * Ejecuta el caso de uso de crear un libro que usa un observable de rxjs para poder ser escuchado por el componente que lo llame y retorna el libro creado
   *
   * @param {BookDomainEntity} bookEntity // El libro a crear en la base de datos
   * @return {Observable<BookDomainEntity>} // Retorna un observable de rxjs que contiene el libro creado
   * @memberof createBookUseCase
   */
  execute(bookEntity: BookDomainEntity): Observable<BookDomainEntity> {
    return this.bookService.createBook(bookEntity);
  }
}
