import { Test } from '@nestjs/testing';
import { BookRepository } from './book.repository.mongo';
import { of } from 'rxjs';
import { BookEntityMongo } from '../entities/book.entity';
import { MongooseModule } from '@nestjs/mongoose';

import { BehaviorSubject } from 'rxjs';

describe('BookRepository', () => {
  let bookRepository: BookRepository;
  let bookEntityMongo: BookEntityMongo;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [BookRepository, BookEntityMongo],
    }).compile();

    bookRepository = moduleRef.get<BookRepository>(BookRepository);
    bookEntityMongo = moduleRef.get<BookEntityMongo>(BookEntityMongo);
  });

  describe('create', () => {
    it('debería crear un nuevo libro', async () => {
      // Arrange
      const expectedBook: BookEntityMongo = new BookEntityMongo({
        _id: '1',
        title: 'señor de los anillos',
        author: 'Tolkien',
        description: 'descripion',
        publishedDate: new Date(),
        createdAt: new Date(),
        updatedLoad: false,
      });
      const subject = new BehaviorSubject(expectedBook);
      jest
        .spyOn(bookRepository, 'save')
        .mockReturnValueOnce(subject.asObservable());

      // Act
      const result = await bookRepository.create(expectedBook).toPromise();

      // Assert
      expect(result).toEqual(expectedBook);
    });
  });

  describe('findBookByTitle', () => {
    it('debería encontrar un libro por su título', async () => {
      // Arrange
      const title = 'señor de los anillos';
      const expectedBook: BookEntityMongo = new BookEntityMongo({
        _id: '1',
        title: 'señor de los anillos',
        author: 'Tolkien',
        description: 'descripion',
        publishedDate: new Date(),
        createdAt: new Date(),
        updatedLoad: false,
      });

      jest
        .spyOn(bookRepository, 'findBookByTitle')
        .mockReturnValueOnce(of([expectedBook]));

      // Act
      const result = await bookRepository.findBookByTitle(title).toPromise();

      // Assert
      expect(result).toEqual([expectedBook]);
    });
  });
});
