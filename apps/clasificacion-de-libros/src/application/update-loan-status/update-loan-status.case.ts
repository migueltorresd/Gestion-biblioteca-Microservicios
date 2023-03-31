import { Injectable } from '@nestjs/common';
import { from, map, Observable } from 'rxjs';
import { BookDomainEntity } from '../../domain/entities/book-domain.entity';
import { IBoookDomainService } from '../../domain/services/book.service';

@Injectable()
export class UpdateLoanStatusUseCase {
  constructor(private readonly bookService: IBoookDomainService) {}

  execute(_id: string, updatedLoan: boolean): Observable<BookDomainEntity> {
    return from(this.bookService.updateLoanStatus(_id, updatedLoan)).pipe(
      map((updatedBook) => updatedBook as BookDomainEntity),
    );
  }
}
