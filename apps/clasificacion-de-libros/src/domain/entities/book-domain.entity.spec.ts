import { of } from 'rxjs';
import { BookDomainEntity } from './book-domain.entity';
import { IBookDomainInterface } from './interfaces/book-domain.interface';
import { IBoookDomainService } from '../services';
import { BookEntityMongo, BookRepository } from '../../infrastructure';
import { Test } from '@nestjs/testing';
let bookMongoService: IBoookDomainService<BookEntityMongo>;
let bookRepository: BookRepository;

describe('BookDomainEntity', () => {
  let bookRepository: BookRepository;
  let bookDomainEntity: BookDomainEntity;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        BookDomainEntity,
        {
          provide: BookRepository,
          useValue: {
            deleteBook: jest.fn(),
          },
        },
      ],
    }).compile();

    bookRepository = moduleRef.get<BookRepository>(BookRepository);
    bookDomainEntity = moduleRef.get<BookDomainEntity>(BookDomainEntity);
  });

  describe('BookDomainEntity', () => {
    const mockBookData: IBookDomainInterface = {
      _id: '123',
      author: 'Jane Doe',
      description: 'An awesome book',
      publishedDate: new Date('2022-01-01'),
      createdAt: new Date('2022-01-01'),
      updatedLoad: false,
      title: 'My Book',
    };

    describe('constructor', () => {
      test('should create a new instance of BookDomainEntity with the provided data', () => {
        const book = new BookDomainEntity(mockBookData);

        expect(book).toBeDefined();
        expect(book._id).toBe(mockBookData._id);
        expect(book.author).toBe(mockBookData.author);
        expect(book.description).toBe(mockBookData.description);
        expect(book.publishedDate).toBe(mockBookData.publishedDate);
        expect(book.createdAt).toBe(mockBookData.createdAt);
        expect(book.updatedLoad).toBe(mockBookData.updatedLoad);
        expect(book.title).toBe(mockBookData.title);
      });
    });

    describe('deleteBook', () => {
      it('should delete a book and return null', async () => {
        // Arrange
        const bookId = '123';

        jest.spyOn(bookRepository, 'deleteBook').mockReturnValueOnce(of(null));

        // Act
        const result = await bookMongoService.deleteBook(bookId).toPromise();

        // Assert
        expect(result).toBeNull();
        expect(bookRepository.deleteBook).toHaveBeenCalledWith(bookId);
      });
    });
  });
});
