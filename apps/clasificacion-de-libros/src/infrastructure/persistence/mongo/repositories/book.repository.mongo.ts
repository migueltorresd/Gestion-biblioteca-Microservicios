import { NotFoundException } from '@nestjs/common';
import { Injectable } from '@nestjs/common/decorators';
import { InjectRepository } from '@nestjs/typeorm';
import { Observable, from, switchMap, map, catchError, mapTo } from 'rxjs';
import { FindManyOptions, Repository } from 'typeorm';
import { BookEntityMongo } from '../entities/book.entity';
import { IBase } from './interfaces/base.interface';

/**
 * Este repositorio se encarga de la persistencia de los libros qen la base de datos
 *
 * @export
 * @class BookRepository
 * @implements {IBase<BookEntityMongo>}
 */
@Injectable()
export class BookRepository implements IBase<BookEntityMongo> {
  /**
   * este contructor es el encargado de inyectar el repositorio de libros de la base de datos
   *
   * @constructor
   * @param {Repository<BookEntityMongo>} bookRepository // repositorio de libros
   */
  constructor(
    @InjectRepository(BookEntityMongo)
    private bookRepository: Repository<BookEntityMongo>,
  ) {}

  /**
   * este metodo se encarga de buscar todos los libros de la base de datos
   *
   * @param BookEntityMongo // libro a crear
   * @returns {Observable<BookEntityMongo>}
   */
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
  /**
   * este metodo se encarga de buscar un libro por su id y lo elimina
   *
   * @param {string} id // id del libro a eliminar
   * @return {Observable<void>} // retorna un observable de rxjs que no contiene nada
   * @memberof BookRepository
   */
  deleteBook(id: string): Observable<void> {
    return from(this.bookRepository.delete(id)).pipe(mapTo(undefined));
  }

  /**
   * este metodo se encarga de buscar un libro por su id y lo actualiza
   *
   * @param {string} _id // id del libro a actualizar
   * @param {boolean} updatedLoad // nuevo estado del prestamo del libro
   * @return {Observable<BookEntityMongo>} // retorna un observable de rxjs que contiene el libro actualizado
   * @memberof BookRepository
   */
  updateLoanStatus(
    _id: string,
    updatedLoad: boolean,
  ): Observable<BookEntityMongo> {
    console.log(_id, updatedLoad);
    return from(this.bookRepository.findOne({ where: { title: _id } })).pipe(
      switchMap((book: BookEntityMongo) => {
        if (!book) {
          throw new NotFoundException(`Book with id ${_id} not found`);
        }
        book.updatedLoad = updatedLoad;
        from(this.bookRepository.delete(book._id));
        return from(this.bookRepository.save(book)).pipe(map(() => book));
      }),
      catchError((error) => {
        throw error;
      }),
    );
  }
}
