import { BookDomainEntity } from './book-domain.entity';
import { IBookDomainInterface } from './interfaces/book-domain.interface';

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

    test('should create a new instance of BookDomainEntity with default values when no data is provided', () => {
      const book = new BookDomainEntity(undefined);

      expect(book).toBeDefined();
      expect(book._id).toBeUndefined();
      expect(book.author).toBeUndefined();
      expect(book.description).toBeUndefined();
      expect(book.publishedDate).toBeUndefined();
      expect(book.createdAt).toBeDefined();
      expect(book.updatedLoad).toBeFalsy();
      expect(book.title).toBeUndefined();
    });
  });
});
