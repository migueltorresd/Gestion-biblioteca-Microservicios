import { Injectable } from '@nestjs/common';
import { IBoookDomainService } from 'apps/clasificacion-de-libros/src/domain/services/book.service';
import { from, Observable } from 'rxjs';
import { BookEntityMongo } from '../entities/book.entity';
import { BookRepository } from '../repositories/book.repository.mongo';

@Injectable()
export class BookMongoService implements IBoookDomainService<BookEntityMongo> {
  constructor(private readonly bookRepository: BookRepository) {}

  createBook(bookEntity: BookEntityMongo): Observable<BookEntityMongo> {
    return from(this.bookRepository.create(bookEntity));
  }
}
