import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { Observable } from 'rxjs';
import { CreateBookUseCase } from '../../application/add-book/add-book-case';
import { BookService } from '../../book.service';
import { BookEntity } from '../../domain/entities/book.entity';

/**
 * Este controlador es el encargado de recibir las peticiones
 *
 * @export
 * @class ClassificationController
 */
@Controller('Classification')
export class ClassificationController {
  constructor(private readonly bookService: BookService) {}

  @Post()
  createBook(@Body() bookEntity: BookEntity): Observable<BookEntity> {
    const useCase = new CreateBookUseCase(this.bookService);
    return useCase.execute(bookEntity);
  }
}
