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
import { BookService } from '../persistence/servces/book.service';
import { EventPattern, Payload } from '@nestjs/microservices';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

/**
 * Este controlador es el encargado de recibir las peticiones de crear, buscar y eliminar un libro
 *
 * @export
 * @class ClassificationController
 */
@ApiTags('Clasification')
@Controller('Classification')
export class ClassificationController {
  constructor(
    private readonly bookService: BookService,
    private readonly createBookPublisher: CreateBookPublisher,
  ) {}

  /**
   * Este metodo es el encargado de recibir la peticion de crear un libro
  
   *
   * @param {createBookDto} bookEntity
   * @return {Observable<BookDomainEntity>} // retorna un observable de un BookDomainEntity
   * @memberof ClassificationController
   */
  @ApiOperation({ summary: 'Crea un libro' })
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
  @ApiOperation({ summary: 'Busca Por Titulo de libro' })
  @Get(':title')
  findBookByTitle(@Param('title') title: string) {
    const usecase = new GetBookUseCase(this.bookService);
    return usecase.execute(title);
  }

  /**
   * Este metodo es el encargado de Actualizar el estado de prestamo de un libro
   *
   * @param {string} id // el id del libro
   * @param {{ updatedLoad: boolean }} updatedLoad // el estado de prestamo del libro
   * @return {Observable<BookDomainEntity>} // retorna un observable de un BookDomainEntity
   * @memberof ClassificationController
   */
  @ApiOperation({ summary: 'Actualiza el estado de prestamo un libro' })
  @Put(':_id')
  UpdateStatusLoan(
    @Param('_id') id: string,
    @Body() updatedLoad: { updatedLoad: boolean },
  ): Observable<BookDomainEntity> {
    const usecase = new UpdateLoanStatusUseCase(this.bookService);
    console.log(updatedLoad);
    return usecase.execute(id, updatedLoad.updatedLoad);
  }
  /**
   * Este metodo es el encargado de recibir la peticion de eliminar un libro por su id
   *
   * @param {string} id // el id del libro
   * @return {Observable<BookDomainEntity>} // retorna un observable de un BookDomainEntity
   * @memberof ClassificationController
   */
  @Delete(':id')
  deleteBook(@Param('id') id: string): Observable<BookDomainEntity> {
    const usecase = new DeleteBookUseCase(this.bookService);
    return usecase.execute(id);
  }

  /**
   * Este metodo es el encargado de recibir la peticion de buscar un libro por su autor
   *
   * @param {string} data // esta es la data que llega de la cola de rabbitmq
   * @return usecase.execute(data) // retorna un observable de un array de BookDto
   * @memberof ClassificationController
   */
  @EventPattern('new-loan')
  newloan(@Payload() data: string) {
    const newDate = JSON.parse(data);
    const usecase = new UpdateLoanStatusUseCase(this.bookService);
    console.log('----------NUEVO PRESTAMO---------');
    console.log(data);
    return usecase.execute(newDate.title, true);
  }
}
