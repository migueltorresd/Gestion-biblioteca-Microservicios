import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { CreateBookUseCase } from '../../application/add-book/create-book-case';
import { DeleteBookUseCase } from '../../application/delete-book/delete-book';
import { GetBookUseCase } from '../../application/get-book/get-book-case';
import { UpdateLoanStatusUseCase } from '../../application/update-loan-status/update-loan-status.case';
import { BookDomainEntity } from '../../domain/entities/book-domain.entity';
import { createBookDto } from '../dto/create-book.dto';
import { CreateBookPublisher } from '../messaging/publishers/create-book.publisher';
import { FindBookByTitlePublisher } from '../messaging/publishers/find-book-by-title-publisher ';
import { BookService } from '../persistence/servces/book.service';
import { EventPattern, Payload } from '@nestjs/microservices';

/**
 * Este controlador es el encargado de recibir las peticiones de crear, buscar y eliminar un libro
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
  @Put(':_id')
  UpdateStatusLoan(
    @Param('_id') id: string,
    @Body() updatedLoad: { updatedLoad: boolean },
  ) {
    const usecase = new UpdateLoanStatusUseCase(this.bookService);
    console.log(updatedLoad);
    return usecase.execute(id, updatedLoad.updatedLoad);
  }
  /**
   * Este metodo es el encargado de recibir la peticion de eliminar un libro por su id
   *
   * @param {string} id
   * @return
   * @memberof ClassificationController
   */
  @Delete(':id')
  deleteBook(@Param('id') id: string) {
    const usecase = new DeleteBookUseCase(this.bookService);
    return usecase.execute(id);
  }

  @EventPattern('new-loan')
  newloan(@Payload() data: string) {
    const newDate = JSON.parse(data);
    const usecase = new UpdateLoanStatusUseCase(this.bookService);
    return usecase.execute(newDate.title, true);
    console.log('----------NUEVO PRESTAMO---------');
    console.log(data);
  }
}
