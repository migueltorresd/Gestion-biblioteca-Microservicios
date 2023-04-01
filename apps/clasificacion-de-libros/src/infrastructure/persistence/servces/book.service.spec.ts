import { Test } from '@nestjs/testing';
import { createBookDto } from '../../dto';
import { BookEntityMongo, BookRepository } from '../mongo';
import { BookService } from './book.service';
import { Writable } from 'stream';

interface BookRepositoryWithSave extends BookRepository {
  save: jest.Mock<Promise<BookEntityMongo>, [BookEntityMongo]>;
}

describe('BookService', () => {
  let service: BookService;
  let repository: BookRepositoryWithSave;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        BookService,
        {
          provide: BookRepository,
          useValue: {
            find: jest.fn(),
            findOne: jest.fn(),
            create: jest.fn(),
            update: jest.fn(),
            delete: jest.fn(),
          },
        },
      ],
    }).compile();

    service = moduleRef.get<BookService>(BookService);
    repository = moduleRef.get<BookRepositoryWithSave>(BookRepository);
    repository.save = jest.fn().mockReturnValue(new Writable()); // Add this line to mock the save method
  });

  describe('create', () => {
    it('should create a book', () => {
      const mockBookDto: createBookDto = {
        _id: '123456789',
        title: 'Test Book',
        author: 'Test Author',
        description: 'This is a test book',
        publishedDate: new Date(),
        createdAt: new Date(),
        updatedLoad: true,
      };

      const mockBook: BookEntityMongo = {
        _id: '123456789',
        title: 'Test Book',
        author: 'Test Author',
        description: 'This is a test book',
        publishedDate: new Date(),
        createdAt: new Date(),
        updatedLoad: true,
      };

      (repository.create as jest.Mock).mockReturnValue(mockBook);
      repository.save.mockResolvedValue(mockBook);

      it('should create a book', async () => {
        const result = await service.createBook(mockBookDto);
        expect(result).toEqual(mockBook);
      });

      expect(repository.create).toBeCalledWith(mockBookDto);
      expect(repository.save).toBeCalledTimes(1);
    });
  });
});
