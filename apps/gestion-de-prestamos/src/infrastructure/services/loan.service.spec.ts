import { LoanService } from './loan.service';

describe('LoanService', () => {
  let loanService: LoanService;
  beforeEach(() => {
    loanService = new LoanService();
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  describe('createLoan', () => {
    it('should create a new loan', async () => {
      // Arrange
      const loanData = {
        amount: 1000,
        duration: 12,
        interestRate: 0.05,
        customerId: 'customer-123',
      };

      const expectedResult = {
        id: 'loan-123',
        amount: 1000,
        duration: 12,
        interestRate: 0.05,
        customerId: 'customer-123',
        status: 'active',
      };

      jest.spyOn(loanService, 'create').mockResolvedValue(expectedResult);

      // Act
      const result = await loanService.createLoan(loanData);

      // Assert
      expect(result).toEqual(expectedResult);
    });

    it('should throw an error if loan data is invalid', async () => {
      // Arrange
      const loanData = {
        amount: -1000,
        duration: -12,
        interestRate: 0.05,
        customerId: 'customer-123',
      };

      // Act and Assert
      await expect(loanService.createLoan(loanData)).rejects.toThrowError(
        'Invalid loan data',
      );
    });
  });
});
