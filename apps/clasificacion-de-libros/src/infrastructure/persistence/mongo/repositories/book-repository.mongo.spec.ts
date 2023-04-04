import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { of } from 'rxjs';
import { BookRepository } from './book.repository.mongo';
import { BookEntityMongo } from '..';

describe('BookRepository', () => {
  let bookMongoRepository: Repository<BookEntityMongo>;
  let bookRepository: BookRepository;
  let findSpy: jest.SpyInstance;
  let deleteSpy: jest.SpyInstance;
  let saveSpy: jest.SpyInstance;
  const expectedBook: BookEntityMongo[] = [
    {
      _id: '1',
      title: 'señor de los anillos',
      author: 'Tolkien',
      description: 'descripion',
      publishedDate: new Date(),
      createdAt: new Date(),
      updatedLoad: false,
    },
  ];

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        BookRepository,
        {
          provide: getRepositoryToken(BookEntityMongo),
          useClass: Repository,
        },
      ],
    }).compile();

    bookMongoRepository = module.get<Repository<BookEntityMongo>>(
      getRepositoryToken(BookEntityMongo),
    );
    bookRepository = module.get<BookRepository>(BookRepository);
  });
  describe('is defined', () => {
    it('should be defined', () => {
      expect(bookRepository).toBeDefined();
    });
  });
  describe('create', () => {
    let expectedBook: BookEntityMongo;
    let saveSpy: jest.SpyInstance;

    beforeEach(() => {
      expectedBook = new BookEntityMongo({
        _id: 'id',
        title: 'title',
        author: 'author',
        description: 'description',
        createdAt: new Date(),
        publishedDate: new Date(),
        updatedLoad: false,
      });

      saveSpy = jest
        .spyOn(bookMongoRepository, 'save')
        .mockReturnValue(Promise.resolve(expectedBook));
    });

    it('should create a new book', async () => {
      // Act
      const result = await bookRepository.create(expectedBook).toPromise();

      // Assert
      expect(result).toEqual(expectedBook);
      expect(saveSpy).toHaveBeenCalledWith(expectedBook);
    });
  });

  describe('findBookByTitle', () => {
    it('should find a book by title', async () => {
      // Arrange
      const title = 'señor de los anillos';
      findSpy = jest
        .spyOn(bookMongoRepository, 'find')
        .mockResolvedValue(expectedBook);

      // Act
      const result = await bookRepository.findBookByTitle(title).toPromise();

      // Assert
      expect(findSpy).toHaveBeenCalledWith({ where: { title } });
      expect(result).toEqual(expectedBook);
    });
  });

  describe('deleteBook', () => {
    it('should delete a book by id', async () => {
      // Arrange
      const id = '1';
      deleteSpy = jest
        .spyOn(bookMongoRepository, 'delete')
        .mockResolvedValue(undefined);

      // Act
      const result = await bookRepository.deleteBook(id).toPromise();

      // Assert
      expect(deleteSpy).toHaveBeenCalledWith(id);
      expect(result).toBeUndefined();
    });
  });
});
