import { Injectable } from '@nestjs/common/decorators';
import { InjectRepository } from '@nestjs/typeorm';
import { BookDomainEntity } from 'apps/clasificacion-de-libros/src/domain/entities/book-domain.entity';
import { Observable, from, mapTo } from 'rxjs';
import { FindManyOptions, Repository } from 'typeorm';
import { BookEntityMongo } from '../entities/book.entity';
import { IBase } from './interfaces/base.interface';

@Injectable()
export class BookRepository implements IBase<BookEntityMongo> {
  constructor(
    @InjectRepository(BookEntityMongo)
    private bookRepository: Repository<BookEntityMongo>,
  ) {}

  // se usa un observable para que el metodo sea asincrono y no se bloquee el hilo de ejecucion
  create(BookEntityMongo): Observable<BookDomainEntity> {
    return from(this.bookRepository.save(BookEntityMongo));
  }

  /**
   *  este metodo se encarga de buscar un libro por su id
   *
   * @param {string} title // titulo del libro a buscar
   * @return {Observable<BookEntity[]>} // libro encontrado
   * @memberof BookRepository
   */
  findBookByTitle(title: string): Observable<BookDomainEntity[]> {
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
