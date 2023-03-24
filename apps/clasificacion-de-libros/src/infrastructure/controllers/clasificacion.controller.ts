import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { Observable } from 'rxjs';
import { AddBookService } from '../../application/add-book/add-book.use.case';
import { Book } from '../../domain/entities/book.entity';

/**
 * Este controlador es el encargado de recibir las peticiones
 *
 * @export
 * @class ClassificationController
 */
@Controller('Classification')
export class ClassificationController {
  constructor(private readonly addBookService: AddBookService) {}

  /**
   * Este metodo es el encargado de recibir la peticion
   *
   * @param {Book} book // Este es el libro que se va a crear
   * @return {Observable<Book>} // Este es el libro que se creo
   * @memberof ClassificationController
   */
  @Post()
  createBook(@Body() book: Book): Observable<Book> {
    return this.addBookService.createBook(book);
  }

  @Get()
  findBooks(
    @Query('query') query: string,
    @Query('author') author: string,
    @Query('title') title: string,
  ): Observable<Book[]> {
    return this.addBookService.findBooks(query, author, title);
  }
}
