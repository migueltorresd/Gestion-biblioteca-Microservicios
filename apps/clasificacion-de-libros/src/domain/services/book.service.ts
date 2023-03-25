import { Observable } from 'rxjs';
import { BookEntity } from '../entities/book.entity';

export interface IBoookDomainService {
  createBookEntity(bookEntityEntity: BookEntity): Observable<BookEntity>;
  findBookEntitys(
    query: string,
    author: string,
    title: string,
  ): Observable<BookEntity[]>;
  updateBookEntity(bookEntity: BookEntity): Observable<BookEntity>;
  deleteBookEntity(bookEntity: BookEntity): Observable<BookEntity>;
}
