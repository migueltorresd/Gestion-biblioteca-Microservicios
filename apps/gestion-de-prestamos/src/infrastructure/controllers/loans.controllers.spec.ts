import { getModelToken } from '@nestjs/mongoose';
import { Test, TestingModule } from '@nestjs/testing';
import { LoanDomainModel } from '../../domain/models';
import { LoanService } from '../services/loan.service';
import { LoansController } from './loans.controllers';
import { of } from 'rxjs';
import { MongoModule } from '../persistence/database/mongo/mongo.module';
import { NewLoanPublisher } from '../messaging/publishers/new-loan.publisher';

describe('LoansController', () => {
  let loansController: LoansController;
  let loanService: LoanService;
  let newLoanPublisher: NewLoanPublisher;

  beforeEach(async () => {
    // Arrange
    const app: TestingModule = await Test.createTestingModule({
      controllers: [LoansController],
      imports: [MongoModule], // Agregar el módulo que contiene el LoanRepository a la lista de imports
      providers: [
        LoanService,
        {
          provide: getModelToken('Loan'),
          useValue: {},
        },
        {
          provide: NewLoanPublisher,
          useValue: { publish: jest.fn() },
        },
      ],
    }).compile();

    newLoanPublisher = app.get<NewLoanPublisher>(NewLoanPublisher);
    loanService = app.get<LoanService>(LoanService);
  });
  it('should be defined', () => {
    expect(loansController).toBeDefined();
  });

  describe('updateLoan', () => {
    it('should return the updated loan', (done) => {
      // Arrange
      const updatedLoan = new LoanDomainModel({
        bookId: 'bookId',
        userId: 'userId',
        title: 'title',
        loanDate: new Date(),
        returnDate: new Date(),
      });

      loanService.updateLoan = jest.fn().mockResolvedValue(updatedLoan);

      // Act
      const result = loansController.updateLoan('loanId', {
        loanDate: new Date(),
      });

      // Assert
      expect(loanService.updateLoan).toHaveBeenCalledWith('loanId', {
        loanDate: new Date(),
      });
      expect(result).toBe(updatedLoan);
    });

    it('should throw an error if loanService throws an error', async () => {
      // Arrange
      const loanId = 'loanId';
      const update = { loanDate: new Date() };
      const error: any = new Error('Loan not found');
      loanService.updateLoan = jest.fn().mockRejectedValue(error);

      // Act and Assert
      await expect(loansController.updateLoan(loanId, update)).rejects.toEqual(
        error,
      );
      expect(loanService.updateLoan).toHaveBeenCalledWith(loanId, update);
    });
  });
});
