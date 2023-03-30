import { Injectable } from '@nestjs/common';
import { from, map, Observable } from 'rxjs';
import { BookDomainEntity } from '../../domain/entities/book-domain.entity';
import { BookRepository } from '../../infrastructure/persistence/mongo/repositories/book.repository.mongo';

@Injectable()
export class UpdateLoanStatusUseCase {
  constructor(private readonly bookRepository: BookRepository) {}

  execute(bookId: string, updatedLoan: boolean): Observable<BookDomainEntity> {
    return from(this.bookRepository.UpdateStatus(bookId, updatedLoan)).pipe(
      map((updatedBook) => updatedBook as BookDomainEntity),
    );
  }
}
