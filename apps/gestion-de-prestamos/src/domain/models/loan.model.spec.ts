import { LoanDomainModel } from './loan.model';

describe('LoanDomainModel', () => {
  describe('constructor', () => {
    test('should create a new instance of LoanDomainModel with default values when no data is provided', () => {
      // Arrange

      // Act
      const loan = new LoanDomainModel(undefined);

      // Assert
      expect(loan.bookId).toBeUndefined();
      expect(loan.userId).toBeUndefined();
      expect(loan.loanDate).toBeUndefined();
      expect(loan.returnDate).toBeUndefined();
    });

    test('should create a new instance of LoanDomainModel with the provided data', () => {
      // Arrange
      const loanData = {
        bookId: 'book-123',
        userId: 'user-456',
        loanDate: new Date(),
        returnDate: new Date(),
      };

      // Act
      const loan = new LoanDomainModel(loanData);

      // Assert
      expect(loan.bookId).toBe(loanData.bookId);
      expect(loan.userId).toBe(loanData.userId);
      expect(loan.loanDate).toBe(loanData.loanDate);
      expect(loan.returnDate).toBe(loanData.returnDate);
    });
  });
});
