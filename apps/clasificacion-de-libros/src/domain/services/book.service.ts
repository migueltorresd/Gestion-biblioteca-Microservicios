import { Observable } from 'rxjs';
import { BookEntity } from '../entities/book.entity';

export interface IBoookDomainService {
  createBook(bookEntity: BookEntity): Observable<BookEntity>;
  findBooks(
    query: string,
    author: string,
    title: string,
  ): Observable<BookEntity[]>;
  updateBook(bookEntity: BookEntity): Observable<BookEntity>;
  deleteBook(bookEntity: BookEntity): Observable<BookEntity>;
}
