import { of } from 'rxjs';
import { BookDomainEntity } from './book-domain.entity';
import { IBookDomainInterface } from './interfaces/book-domain.interface';
import { IBoookDomainService } from '../services';
import { BookEntityMongo, BookRepository } from '../../infrastructure';
import { Test } from '@nestjs/testing';

describe('BookDomainEntity', () => {
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
  });
});
