import { Observable } from 'rxjs';
import { BookEntity } from '../../domain/entities/book.entity';
import { IBookDomainService } from '../../domain/services/book.service';

/**
 * Este caso de uso se encarga de crear un libro en la base de datos
 *
 * @export
 * @class createBookUseCase
 */
export class createBookUseCase {
  constructor(private readonly bookService: IBookDomainService) {}

  /**
   * Ejecuta el caso de uso de crear un libro que usa un observable de rxjs para poder ser escuchado por el componente que lo llame y retorna el libro creado
   *
   * @param {BookEntity} bookEntity // El libro a crear en la base de datos
   * @return {Observable<BookEntity>} // Retorna un observable de rxjs que contiene el libro creado
   * @memberof createBookUseCase
   */
  execute(bookEntity: BookEntity): Observable<BookEntity> {
    return this.bookService.createBook(bookEntity);
  }
}
