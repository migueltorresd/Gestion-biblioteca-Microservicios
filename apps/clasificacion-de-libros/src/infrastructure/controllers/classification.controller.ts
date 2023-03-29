import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Query,
} from '@nestjs/common';
import { map, Observable } from 'rxjs';
import { CreateBookUseCase } from '../../application/create-book/create-book-case';
import { DeleteBookUseCase } from '../../application/delete-book/delete-book';
import { GetBookUseCase } from '../../application/get-book/get-book-case';
import { BookDomainEntity } from '../../domain/entities/book-domain.entity';
import { createBookDto } from '../dto/create-book.dto';
import { CreateBookPublisher } from '../messaging/publishers/create-book.publisher';
import { FindBookByTitlePublisher } from '../messaging/publishers/find-book-by-title-publisher ';
import { BookService } from '../persistence/servces/book.service';

/**
 * Este controlador es el encargado de recibir las peticiones
 *
 * @export
 * @class ClassificationController
 */
@Controller('Classification')
export class ClassificationController {
  constructor(
    private readonly bookService: BookService,
    private readonly createBookPublisher: CreateBookPublisher,
    private readonly findBookByTitlePublisher: FindBookByTitlePublisher,
  ) {}

  /**
   * Este metodo es el encargado de recibir la peticion de crear un libro
  
   *
   * @param {createBookDto} bookEntity
   * @return {Observable<BookDomainEntity>} // retorna un observable de un BookDomainEntity
   * @memberof ClassificationController
   */
  @Post()
  createBook(@Body() bookEntity: createBookDto): Observable<BookDomainEntity> {
    const useCase = new CreateBookUseCase(this.bookService);
    this.createBookPublisher.publish(bookEntity);
    return useCase.execute(bookEntity);
  }

  /**
   * Este metodo es el encargado de recibir la peticion de buscar un libro por su titulo
   *
   * @param {string} title
   * @return {{Observable<BookDto[]>} // retorna un observable de un array de BookDto
   * @memberof ClassificationController
   */

  @Get(':title')
  findBookByTitle(@Param('title') title: string) {
    const usecase = new GetBookUseCase(this.bookService);
    this.findBookByTitlePublisher.publish(title);
    return usecase.execute(title);
  }

  @Delete(':id')
  deleteBook(@Param('id') id: string) {
    const usecase = new DeleteBookUseCase(this.bookService);
    return usecase.execute(id);
  }
}
