import { Injectable } from '@nestjs/common';
import { from, map, Observable } from 'rxjs';
import { BookDomainEntity } from '../../domain/entities/book-domain.entity';
import { IBoookDomainService } from '../../domain/services/book.service';

/**
 * Este caso de uso se encarga de actualizar el estado de prestamo de un libro
 *
 * @export
 * @class UpdateLoanStatusUseCase
 */
@Injectable()
export class UpdateLoanStatusUseCase {
  constructor(private readonly bookService: IBoookDomainService) {}

  /**
   * Este metodo se encarga de ejecutar el caso de uso
   * y actualizar el estado de prestamo de un libro
   *
   * @param {string} _id // id del libro a actualizar
   * @param {boolean} updatedLoan // nuevo estado de prestamo
   * @return {Observable<BookDomainEntity>} // retorna el libro actualizado
   * @memberof UpdateLoanStatusUseCase
   */
  execute(_id: string, updatedLoan: boolean): Observable<BookDomainEntity> {
    return from(this.bookService.updateLoanStatus(_id, updatedLoan)).pipe(
      map((updatedBook) => updatedBook as BookDomainEntity),
    );
  }
}
