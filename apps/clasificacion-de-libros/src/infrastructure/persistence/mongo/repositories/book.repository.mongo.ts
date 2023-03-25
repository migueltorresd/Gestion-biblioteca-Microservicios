import { InjectModel } from '@nestjs/mongoose';
import { BookEntity } from 'apps/clasificacion-de-libros/src/domain/entities/book.entity';
import { Model } from 'mongoose';
import { Observable, from } from 'rxjs';
import { BookEntityMongo } from '../entities/book.entity';
import { IBase } from './interfaces/base.interface';

export class BookRepository implements IBase<BookEntity> {
  books: any;
  constructor(
    @InjectModel('Book') private readonly bookModel: Model<BookEntityMongo>,
  ) {}

  /**
   * este metodo se encarga de buscar un libro por su id
   *
   * @param {Book} book // libro a buscar
   * @return {Observable<BookEntity>} // libro encontrado
   * @memberof BookEntityRepositoryImpl // repositorio de libros
   */
  // se usa un observable para que el metodo sea asincrono y no se bloquee el hilo de ejecucion
  create(book: BookEntity): Observable<BookEntity> {
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
   * @return {Observable<BookEntity[]>} // libros encontrados
   * @memberof BookEntityRepositoryImpl
   */
  findByQuery(
    query: string,
    author: string,
    title: string,
  ): Observable<BookEntity[]> {
    const filteredBookEntitys = this.books.filter((book) => {
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
      observer.next(filteredBookEntitys);
      observer.complete();
    });
  }
}
