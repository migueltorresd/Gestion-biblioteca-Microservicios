import { of } from 'rxjs';
import { BookDomainEntity } from '../../domain/entities/book-domain.entity';
import { IBoookDomainService } from '../../domain/services/book.service';
import { DeleteBookUseCase } from './delete-book';

describe('DeleteBookUseCase', () => {
  let bookService: IBoookDomainService;
  let deleteBookUseCase: DeleteBookUseCase;
  const deletedBook: BookDomainEntity = {
    _id: '12',
    author: 'el señor',
    description: 'es una historia de un señor',
    publishedDate: new Date(1954, 7, 29),
    createdAt: new Date(2020, 7, 29),
    updatedLoad: false,
    title: 'señor de los anillos',
  };

  beforeEach(() => {
    bookService = {
      deleteBook: jest.fn((_id: string) => of(deletedBook)),
      createBook: jest.fn(),
      findBookByTitle: jest.fn(),
      updateLoanStatus: jest.fn(),
    };
    deleteBookUseCase = new DeleteBookUseCase(bookService);
  });

  describe('execute', () => {
    it('should delete a book by id and return it', (done) => {
      // Arrange
      const bookId = '123';

      // Act
      const result$ = deleteBookUseCase.execute(bookId);

      // Assert
      result$.subscribe({
        next: (book) => {
          expect(bookService.deleteBook).toHaveBeenCalledWith(bookId);
          expect(book).toEqual({ _id: bookId, ...deletedBook });

          done();
        },
      });
    });
  });
});
