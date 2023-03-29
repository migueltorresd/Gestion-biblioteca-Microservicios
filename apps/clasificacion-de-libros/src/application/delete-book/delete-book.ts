import { Observable } from 'rxjs';
import { BookDomainEntity } from '../../domain/entities/book-domain.entity';
import { IBoookDomainService } from '../../domain/services/book.service';

/**
 * Este caso de uso se encarga de eliminar un libro en la base de datos
 *
 * @export
 * @class DeleteBookUseCase
 */
export class DeleteBookUseCase {
  constructor(private readonly bookService: IBoookDomainService) {}

  /**
   * Ejecuta el caso de uso de eliminar un libro que usa un observable de rxjs para poder ser escuchado
   * por el componente que lo llame y retorna el libro eliminado
   *
   * @param {string} id // El id del libro a eliminar
   * @return {Observable<BookDomainEntity>} // Retorna un observable de rxjs que contiene el libro eliminado
   * @memberof DeleteBookUseCase
   */
  execute(id: string): Observable<BookDomainEntity> {
    return this.bookService.deleteBook(id);
  }
}
