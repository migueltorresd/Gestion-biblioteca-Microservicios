import { UpdateLoanDto } from './loan.dto';

describe('UpdateLoanDto', () => {
  let updateLoanDto: UpdateLoanDto;

  beforeEach(() => {
    updateLoanDto = new UpdateLoanDto();
  });

  describe('bookId', () => {
    it('should be a string', () => {
      // Arrange
      const bookId = '123';

      // Act
      updateLoanDto.bookId = bookId;

      // Assert
      expect(updateLoanDto.bookId).toEqual(bookId.toString());
    });
  });

  describe('userId', () => {
    it('should be a string', () => {
      // Arrange
      const userId = '456';

      // Act
      updateLoanDto.userId = userId;

      // Assert
      expect(updateLoanDto.userId).toEqual(userId.toString());
    });
  });

  describe('loanDate', () => {
    it('should be a Date object', () => {
      // Arrange
      const loanDate = '2022-01-01';

      // Act
      updateLoanDto.loanDate = new Date(loanDate);

      // Assert
      expect(updateLoanDto.loanDate).toBeInstanceOf(Date);
      expect(updateLoanDto.loanDate.toISOString().substring(0, 10)).toEqual(
        loanDate,
      );
    });
  });

  describe('returnDate', () => {
    it('should be a Date object', () => {
      // Arrange
      const returnDate = '2022-01-08';

      // Act
      updateLoanDto.returnDate = new Date(returnDate);

      // Assert
      expect(updateLoanDto.returnDate).toBeInstanceOf(Date);
      expect(updateLoanDto.returnDate.toISOString().substring(0, 10)).toEqual(
        returnDate,
      );
    });
  });
});
