import { of } from 'rxjs';
import { CreateLoanUseCase } from './create-loan.usecase';
import { LoanDomainModel } from '../../domain/models/loan.model';
import { ILoanDomainServiceInterface } from '../../domain/services/loan.service';

describe('CreateLoanUseCase', () => {
  let createLoanUseCase: CreateLoanUseCase;
  let mockLoanService: jest.Mocked<
    ILoanDomainServiceInterface<LoanDomainModel>
  >;

  beforeEach(() => {
    mockLoanService = {
      createLoan: jest.fn(),
      updateLoan: jest.fn(),
    } as jest.Mocked<ILoanDomainServiceInterface<LoanDomainModel>>;

    createLoanUseCase = new CreateLoanUseCase(mockLoanService);
  });

  it('should create a loan', () => {
    // Arrange
    const loanEntity: LoanDomainModel = {
      bookId: 'book-123',
      userId: 'user-456',
      loanDate: new Date(),
      returnDate: new Date(),
    };

    mockLoanService.createLoan.mockReturnValue(of(loanEntity));

    // Act
    const result$ = createLoanUseCase.execute(loanEntity);

    // Assert
    result$.subscribe((loan) => {
      expect(loan).toBe(loanEntity);
      expect(mockLoanService.createLoan).toHaveBeenCalledWith(loanEntity);
    });
  });
});
