import { NotFoundException } from '@nestjs/common';
import { Injectable } from '@nestjs/common/decorators';
import { InjectRepository } from '@nestjs/typeorm';
import { BookDomainEntity } from 'apps/clasificacion-de-libros/src/domain/entities/book-domain.entity';
import {
  Observable,
  from,
  mapTo,
  switchMap,
  map,
  catchError,
  tap,
  mergeMap,
} from 'rxjs';
import { FindManyOptions, FindOneOptions, ObjectID, Repository } from 'typeorm';
import { BookEntityMongo } from '../entities/book.entity';
import { IBase } from './interfaces/base.interface';
import mongoose from 'mongoose';

/**
 * Este repositorio se encarga de la persistencia de los libros qen la base de datos
 *
 * @export
 * @class BookRepository
 * @implements {IBase<BookEntityMongo>}
 */
@Injectable()
export class BookRepository implements IBase<BookEntityMongo> {
  constructor(
    @InjectRepository(BookEntityMongo)
    private bookRepository: Repository<BookEntityMongo>,
  ) {}

  // se usa un observable para que el metodo sea asincrono y no se bloquee el hilo de ejecucion
  create(BookEntityMongo): Observable<BookEntityMongo> {
    return from(this.bookRepository.save(BookEntityMongo));
  }

  /**
   *  este metodo se encarga de buscar un libro por su id
   *
   * @param {string} title // titulo del libro a buscar
   * @return {Observable<BookEntity[]>} // libro encontrado
   * @memberof BookRepository
   */
  findBookByTitle(title: string): Observable<BookEntityMongo[]> {
    const options: FindManyOptions<BookEntityMongo> = {
      where: {
        title: title,
      },
    };
    return from(this.bookRepository.find(options));
  }
  deleteBook(id: string): Observable<void> {
    return from(this.bookRepository.delete(id)).pipe(undefined);
  }

  updateLoanStatus(
    _id: string,
    updatedLoad: boolean,
  ): Observable<BookEntityMongo> {
    return from(this.bookRepository.findOne({ where: { title: _id } })).pipe(
      switchMap((book: BookEntityMongo) => {
        console.log(book);
        if (!book) {
          throw new NotFoundException(`Book with id ${_id} not found`);
        }
        book.updatedLoad = updatedLoad;

        return this.bookRepository.save(book);
      }),
      //map((updatedBook) => updatedBook as BookEntityMongo),
      catchError((error) => {
        throw error;
      }),
    );
  }
}
