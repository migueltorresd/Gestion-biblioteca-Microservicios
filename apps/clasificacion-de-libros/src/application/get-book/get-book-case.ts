import { Observable } from 'rxjs';
import { BookDomainEntity } from '../../domain/entities/book-domain.entity';
import { IBoookDomainService } from '../../domain/services/book.service';

/**
 * Este caso de uso se encarga de buscar un libro en la base de datos
 * por medio de un query y un titulo de libro que se le pasa como parametro
 *
 * @export
 * @class GetBookUseCase
 */
export class GetBookUseCase {
  constructor(private readonly bookService: IBoookDomainService) {}

  /**
   * Ejecuta el caso de uso de buscar un libro que usa un observable de rxjs para poder
   * ser escuchado por el componente que lo llame y retorna el libro buscado
   * el observable se encarga de emitir el libro buscado y se puede subscribir a
   * el desde el componente que lo llame
   *
   * @param {string} title // titulo del libro a buscar
   * @return {Observable<BookDomainEntity[]>}
   * @memberof GetBookUseCase
   */
  execute(title: string): Observable<BookDomainEntity[]> {
    return this.bookService.findBookByTitle(title);
  }
}
