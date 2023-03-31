import { from, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { IBoookDomainService } from '../../domain/services/book.service';
import { UpdateLoanStatusUseCase } from './update-loan-status.case';

describe('UpdateLoanStatusUseCase', () => {
  let mockBookService: jest.Mocked<IBoookDomainService>;
  let updateLoanStatusUseCase: UpdateLoanStatusUseCase;

  beforeEach(() => {
    mockBookService = {
      deleteBook: jest.fn(),
      createBook: jest.fn(),
      updateLoanStatus: jest.fn(),
      findBookByTitle: jest.fn(),
    } as jest.Mocked<IBoookDomainService>;

    updateLoanStatusUseCase = new UpdateLoanStatusUseCase(mockBookService);
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  describe('execute', () => {
    it('should update the loan status of a book and return an observable with the updated book', () => {
      // Arrange
      const _id = '123';
      const updatedLoan = true;
      const expectedBook = {
        _id: '123',
        title: 'The Lord of the Rings',
        author: 'J.R.R. Tolkien',
        description: 'A fantasy novel',
        publishedDate: new Date('1954-07-29T00:00:00.000Z'),
        createdAt: new Date('2022-03-01T00:00:00.000Z'),
        updatedLoad: true,
      };
      mockBookService.updateLoanStatus.mockReturnValue(of(expectedBook));

      // Act
      const result$ = updateLoanStatusUseCase.execute(_id, updatedLoan);

      // Assert
      result$.subscribe((book) => {
        // Arrange
        expect(mockBookService.updateLoanStatus).toHaveBeenCalledWith(
          _id,
          updatedLoan,
        );
        expect(book).toEqual(expectedBook);
      });
    });
  });
});
