import { Observable } from 'rxjs';
import { Book } from '../entities/book.entity';

/**
 *
 *
 * @export
 * @interface BookRepository
 */
export interface BookRepository {
  create(book: Book): Observable<Book>;
  findByQuery(query: string, author: string, title: string): Observable<Book[]>;
}
