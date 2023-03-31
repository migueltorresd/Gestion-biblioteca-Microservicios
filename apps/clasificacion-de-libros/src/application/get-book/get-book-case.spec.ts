import { of } from 'rxjs';
import { BookDomainEntity } from '../../domain/entities/book-domain.entity';
import { IBoookDomainService } from '../../domain/services/book.service';
import { GetBookUseCase } from './get-book-case';

describe('GetBookUseCase', () => {
  let mockBookService: jest.Mocked<IBoookDomainService>;
  let getBookUseCase: GetBookUseCase;

  beforeEach(() => {
    mockBookService = {
      deleteBook: jest.fn(),
      createBook: jest.fn(),
      updateLoanStatus: jest.fn(),
      findBookByTitle: jest.fn(),
    } as jest.Mocked<IBoookDomainService>;

    getBookUseCase = new GetBookUseCase(mockBookService);
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  describe('execute', () => {
    it('should return an observable with an array of books when a valid title is provided', () => {
      // Arrange
      const title = 'señor de los anillos';
      const expectedBook: BookDomainEntity = {
        _id: '12',
        author: 'el señor',
        description: 'es una historia de un señor',
        publishedDate: new Date(1954, 7, 29),
        createdAt: new Date(2020, 7, 29),
        updatedLoad: false,
        title: 'señor de los anillos',
      };
      mockBookService.findBookByTitle.mockReturnValue(of([expectedBook]));

      // Act
      const result$ = getBookUseCase.execute(title);

      // Assert
      result$.subscribe((books) => {
        expect(mockBookService.findBookByTitle).toHaveBeenCalledWith(title);
        expect(books).toEqual([expectedBook]);
      });
    });

    it('should return an observable with an empty array when no books are found for the provided title', () => {
      // Arrange
      const title = 'Non-existent Book';
      mockBookService.findBookByTitle.mockReturnValue(of([]));

      // Act
      const result$ = getBookUseCase.execute(title);

      // Assert
      result$.subscribe((books) => {
        expect(mockBookService.findBookByTitle).toHaveBeenCalledWith(title);
        expect(books).toEqual([]);
      });
    });
  });
});
