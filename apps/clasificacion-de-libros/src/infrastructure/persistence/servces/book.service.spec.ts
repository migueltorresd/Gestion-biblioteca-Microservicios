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

  describe('is defined', () => {
    it('should be defined', () => {
      expect(service).toBeDefined();
    });
  });
});
