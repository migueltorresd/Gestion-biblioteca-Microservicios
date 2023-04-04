import { Test } from '@nestjs/testing';
import { of } from 'rxjs';
import { BookEntityMongo } from '../entities/book.entity';
import { BookRepository } from '../repositories/book.repository.mongo';
import { BookDomainEntity } from '../../../../domain/entities';
import { IBoookDomainService } from '../../../../domain/services/book.service';
import { BookMongoService } from './book-mongo.service';

describe('BookMongoService', () => {
  let bookMongoService: IBoookDomainService<BookEntityMongo>;
  let bookRepository: BookRepository;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        BookMongoService,
        {
          provide: BookRepository,
          useValue: {
            create: jest.fn(),
            findBookByTitle: jest.fn(),
            deleteBook: jest.fn(),
            updateLoanStatus: jest.fn(),
          },
        },
      ],
    }).compile();

    bookMongoService =
      moduleRef.get<IBoookDomainService<BookEntityMongo>>(BookMongoService);
    bookRepository = moduleRef.get<BookRepository>(BookRepository);
  });
  describe('is defined', () => {
    it('should be defined', () => {
      expect(bookMongoService).toBeDefined();
    });
  });
  describe('createBook', () => {
    it('should create a book and return it as an observable', async () => {
      // Arrange
      const bookToCreate = new BookDomainEntity({
        _id: '1',
        title: 'señor de los anillos',
        author: 'Tolkien',
        description: 'descripion',
        publishedDate: new Date(),
        createdAt: new Date(),
        updatedLoad: false,
      });

      const createdBook: BookEntityMongo = new BookEntityMongo({
        _id: '1',
        title: 'señor de los anillos',
        author: 'Tolkien',
        description: 'descripion',
        publishedDate: new Date(),
        createdAt: new Date(),
        updatedLoad: false,
      });

      jest.spyOn(bookRepository, 'create').mockReturnValueOnce(of(createdBook));

      // Act
      const result = await bookMongoService
        .createBook(bookToCreate)
        .toPromise();

      // Assert
      expect(result).toEqual(createdBook);
      expect(bookRepository.create).toHaveBeenCalledWith(bookToCreate);
    });
  });

  describe('findBookByTitle', () => {
    it('should find a book by its title and return it as an array of observables', async () => {
      // Arrange
      const title = 'The Lord of the Rings';
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
      const result = await bookMongoService.findBookByTitle(title).toPromise();

      // Assert
      expect(result).toEqual([expectedBook]);
      expect(bookRepository.findBookByTitle).toHaveBeenCalledWith(title);
    });
  });
});
