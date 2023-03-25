import { InjectModel } from '@nestjs/mongoose';
import { Book } from '../../../../domain/entities/book.entity';
import { BookRepository } from '../../../../domain/repositorios/book.repository.interface';
import { Model } from 'mongoose';
import { Observable, from } from 'rxjs';

export class BookRepositoryImpl implements BookRepository {
  books: any;
  constructor(@InjectModel('Book') private readonly bookModel: Model<Book>) {}

  /**
   * este metodo se encarga de buscar un libro por su id
   *
   * @param {Book} book // libro a buscar
   * @return {Observable<Book>} // libro encontrado
   * @memberof BookRepositoryImpl // repositorio de libros
   */
  // se usa un observable para que el metodo sea asincrono y no se bloquee el hilo de ejecucion
  create(book: Book): Observable<Book> {
    // se crea un libro con el modelo de mongoose
    const createdBook = new this.bookModel(book);
    return from(createdBook.save());
  }

  /**
   * este metodo se encarga de buscar un libro por su id con el modelo de mongoose
   *
   * @param {string} query // query de busqueda
   * @param {string} author // autor del libro
   * @param {string} title // titulo del libro
   * @return {Observable<Book[]>} // libros encontrados
   * @memberof BookRepositoryImpl
   */
  findByQuery(
    query: string,
    author: string,
    title: string,
  ): Observable<Book[]> {
    const filteredBooks = this.books.filter((book) => {
      // si hay una query se busca en el titulo y el autor
      if (query) {
        const lowerQuery = query.toLowerCase();
        const lowerTitle = book.title.toLowerCase();
        const lowerAuthor = book.author.toLowerCase();
        if (
          !lowerTitle.includes(lowerQuery) &&
          !lowerAuthor.includes(lowerQuery)
        ) {
          return false;
        }
      }
      if (author && book.author.toLowerCase() !== author.toLowerCase()) {
        return false;
      }
      if (title && book.title.toLowerCase() !== title.toLowerCase()) {
        return false;
      }
      return true;
    });
    return new Observable((observer) => {
      observer.next(filteredBooks);
      observer.complete();
    });
  }
}
