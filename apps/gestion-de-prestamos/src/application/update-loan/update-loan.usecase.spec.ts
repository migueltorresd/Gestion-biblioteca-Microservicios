import { of } from 'rxjs';
import { LoanDomainModel } from '../../domain/models/loan.model';
import { ILoanDomainServiceInterface } from '../../domain/services/loan.service';
import { UpdateLoanUseCase } from './update-loan.usecase';

describe('UpdateLoanUseCase', () => {
  let mockLoanService: jest.Mocked<
    ILoanDomainServiceInterface<LoanDomainModel>
  >;
  let updateLoanUseCase: UpdateLoanUseCase;

  beforeEach(() => {
    mockLoanService = {
      updateLoan: jest.fn(),
      createLoan: jest.fn(),
    } as jest.Mocked<ILoanDomainServiceInterface<LoanDomainModel>>;

    updateLoanUseCase = new UpdateLoanUseCase(mockLoanService);
  });

  it('should update a loan and return it', (done) => {
    // Arrange
    const loanEntity = {
      id: '123',
      userId: '456',
      bookId: '789',
      loanDate: new Date(),
      returnDate: new Date(),
    };

    const updatedLoan = { ...loanEntity, returnDate: new Date('2023-04-01') };

    mockLoanService.updateLoan.mockReturnValueOnce(of(updatedLoan));

    // Act
    const result$ = updateLoanUseCase.updateLoan(loanEntity);

    // Assert
    result$.subscribe((loan) => {
      expect(mockLoanService.updateLoan).toHaveBeenCalledWith(loanEntity);
      expect(loan).toEqual(updatedLoan);
      done();
    });
  });
});
