import { TestingModule, Test } from '@nestjs/testing';
import { Observable } from 'rxjs';
import { NewLoanPublisher } from '../messaging/publishers/new-loan.publisher';
import { LoanSchemaMongo } from '../persistence/database/mongo/schemas/loan.schema';
import { LoanService } from '../services/loan.service';
import { LoansController } from './loans.controllers';

describe('LoansController', () => {
  let controller: LoansController;
  let loansService: LoanService;
  let newLoanPublisher: NewLoanPublisher;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LoansController],
      providers: [
        {
          provide: LoanService,
          useValue: {
            createLoan: jest.fn(() => ({
              pipe: jest.fn(() => ({
                toPromise: jest.fn(),
              })),
            })),
          },
        },
        {
          provide: NewLoanPublisher,
          useValue: {
            publish: jest.fn(),
          },
        },
      ],
    }).compile();

    controller = module.get<LoansController>(LoansController);
    loansService = module.get<LoanService>(LoanService);
    newLoanPublisher = module.get<NewLoanPublisher>(NewLoanPublisher);
  });

  describe('createLoan', () => {
    it('should create a loan and publish a message', async () => {
      // Arrange
      const loan: LoanSchemaMongo = {
        bookId: '',
        userId: '',
        loanDate: undefined,
        returnDate: undefined,
      };

      // Act
      const result: Observable<LoanSchemaMongo> = await controller.createLoan(
        loan,
      );

      // Assert
      expect(newLoanPublisher.publish).toHaveBeenCalledWith(loan);
      expect(loansService.createLoan).toHaveBeenCalledWith(loan);
      expect(result).toBeDefined();
    });

    it('should return an Observable', async () => {
      // Arrange
      const loan: LoanSchemaMongo = {
        bookId: '',
        userId: '',
        loanDate: undefined,
        returnDate: undefined,
      };

      // Act
      const result: Observable<LoanSchemaMongo> = await controller.createLoan(
        loan,
      );

      // Assert
      expect(result).toBeInstanceOf(Observable);
    });
  });
});
