import { BookDomainEntity } from '../../domain/entities/book-domain.entity';
import { IBoookDomainService } from '../../domain/services/book.service';
import { of } from 'rxjs';
import { CreateBookUseCase } from './create-book-case';

describe('CreateBookUseCase', () => {
  let createBookUseCase: CreateBookUseCase;
  let bookService: IBoookDomainService;
  let book: BookDomainEntity;

  beforeEach(() => {
    bookService = {
      createBook: jest.fn(() => of(book)),
      findBookByTitle: jest.fn(),
      deleteBook: jest.fn(),
      updateLoanStatus: jest.fn(),
    };
    createBookUseCase = new CreateBookUseCase(bookService);
    book = {
      _id: '12',
      author: 'el señor',
      description: 'es una historia de un señor',
      publishedDate: new Date(1954, 7, 29),
      createdAt: new Date(2020, 7, 29),
      updatedLoad: false,
      title: 'señor de los anillos',
    };
  });

  it('should create a book', () => {
    // Arrange
    const expectedBook = book;

    // Act
    const result = createBookUseCase.execute(book);

    // Assert
    result.subscribe((book) => {
      expect(book).toEqual(expectedBook);
    });
    expect(bookService.createBook).toHaveBeenCalledWith(book);
  });
});
