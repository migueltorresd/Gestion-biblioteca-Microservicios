import { Observable } from 'rxjs';
import { BookEntity } from '../../domain/entities/book.entity';
import { IBoookDomainService } from '../../domain/services/book.service';

export class DeleteBookUseCase {
  constructor(private readonly bookService: IBoookDomainService) {}

  execute(id: string): Observable<BookEntity> {
    return this.bookService.deleteBook(id);
  }
}
