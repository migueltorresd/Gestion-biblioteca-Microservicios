import { Injectable } from '@nestjs/common/decorators';
import { InjectRepository } from '@nestjs/typeorm';
import { BookEntity } from 'apps/clasificacion-de-libros/src/domain/entities/book.entity';
import { Observable, from, switchMap, mapTo } from 'rxjs';
import { FindManyOptions, Like, Repository } from 'typeorm';
import { DeleteBookDto } from '../../../dto/delete.dto';
import { BookEntityMongo } from '../entities/book.entity';
import { IBase } from './interfaces/base.interface';

@Injectable()
export class BookRepository implements IBase<BookEntityMongo> {
  constructor(
    @InjectRepository(BookEntityMongo)
    private bookRepository: Repository<BookEntityMongo>,
  ) {}

  /**
   * este metodo se encarga de buscar un libro por su id
   *
   * @param {Book} book // libro a buscar
   * @return {Observable<BookEntity>} // libro encontrado
   * @memberof BookEntityRepositoryImpl // repositorio de libros
   */
  // se usa un observable para que el metodo sea asincrono y no se bloquee el hilo de ejecucion
  create(BookEntityMongo): Observable<BookEntity> {
    return from(this.bookRepository.save(BookEntityMongo));
  }

  /**
   *  este metodo se encarga de buscar un libro por su id
   *
   * @param {string} title // titulo del libro a buscar
   * @return {Observable<BookEntity[]>} // libro encontrado
   * @memberof BookRepository
   */
  findBookByTitle(title: string): Observable<BookEntity[]> {
    const options: FindManyOptions<BookEntityMongo> = {
      where: {
        title: title,
      },
    };
    return from(this.bookRepository.find(options));
  }
  deleteBook(id: string): Observable<void> {
    return from(this.bookRepository.delete(id)).pipe(mapTo(undefined));
  }
}
