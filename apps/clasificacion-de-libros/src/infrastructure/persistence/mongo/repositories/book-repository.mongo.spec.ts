import { Test } from '@nestjs/testing';
import { BookRepository } from './book.repository.mongo';
import { of } from 'rxjs';
import { BookEntityMongo } from '../entities/book.entity';

describe('BookRepository', () => {
  let bookRepository: BookRepository;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [BookRepository],
    }).compile();

    bookRepository = moduleRef.get<BookRepository>(BookRepository);
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
