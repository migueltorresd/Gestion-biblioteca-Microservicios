import { Column, Entity, ObjectIdColumn } from 'typeorm';
import { AuthorEntityMongo } from './autor.entity';
import { BookDomainEntity } from '../../../../../src/domain/entities/book-domain.entity';
import { BookEntityMongo } from './book.entity';

describe('BookEntityMongo', () => {
  let bookEntity: BookEntityMongo;

  beforeEach(() => {
    bookEntity = new BookEntityMongo({
      _id: '1',
      title: 'Test book',
      author: 'Test author',
      description: 'This is a test book',
      publishedDate: new Date('2023-04-01'),
      createdAt: new Date('2023-04-01'),
      updatedLoad: false,
    });
  });

  describe('constructor', () => {
    test('should create a new instance of BookEntityMongo', () => {
      expect(bookEntity).toBeInstanceOf(BookEntityMongo);
    });
  });

  describe('properties', () => {
    test('should set and get properties correctly', () => {
      expect(bookEntity._id).toBe('1');
      expect(bookEntity.title).toBe('Test book');
      expect(bookEntity.author).toBe('Test author');
      expect(bookEntity.description).toBe('This is a test book');
      expect(bookEntity.publishedDate).toEqual(new Date('2023-04-01'));
      expect(bookEntity.createdAt).toEqual(new Date('2023-04-01'));
      expect(bookEntity.updatedLoad).toBe(false);
    });
  });
});
