import { Injectable } from '@nestjs/common';
import { Book } from 'apps/clasificacion-de-libros/src/domain/entities/book.entity';
import { BookRepository } from 'apps/clasificacion-de-libros/src/domain/repositorios/book.repository.interface';
import { Observable } from 'rxjs';

@Injectable()
export class AddBookService {
  constructor(private readonly bookRepository: BookRepository) {}

  createBook(book: Book): Observable<Book> {
    return this.bookRepository.create(book);
  }
  findBooks(query: string, author: string, title: string): Observable<Book[]> {
    return this.bookRepository.findByQuery(query, author, title);
  }
}
