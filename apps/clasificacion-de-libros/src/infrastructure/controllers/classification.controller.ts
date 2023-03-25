import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { Observable } from 'rxjs';
import { BookEntity } from '../../domain/entities/book.entity';

/**
 * Este controlador es el encargado de recibir las peticiones
 *
 * @export
 * @class ClassificationController
 */
@Controller('Classification')
export class ClassificationController {
  constructor(private readonly addBookService: AddBookService) {}

  @Post()
  createBook(@Body() bookEntity: BookEntity): Observable<BookEntity> {
    const useCase = new AddBookUseCase(this.addBookService);
    return this.addBookService.createBook(bookEntity);
  }
}
