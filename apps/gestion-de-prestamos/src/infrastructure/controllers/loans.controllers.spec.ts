import { getModelToken } from '@nestjs/mongoose';
import { Test } from '@nestjs/testing';
import { LoanDomainModel } from '../../domain/models';
import { LoanService } from '../services/loan.service';
import { LoansController } from './loans.controllers';
import { of } from 'rxjs';
import { MongoModule } from '../persistence/database/mongo/mongo.module';

describe('LoansController', () => {
  let loansController: LoansController;
  let loanService: LoanService;

  beforeEach(async () => {
    // Arrange
    const moduleRef = await Test.createTestingModule({
      controllers: [LoansController],
      imports: [MongoModule], // Agregar el módulo que contiene el LoanRepository a la lista de imports
      providers: [
        LoanService,
        {
          provide: getModelToken('Loan'),
          useValue: {},
        },
      ],
    }).compile();

    loansController = moduleRef.get<LoansController>(LoansController);
    loanService = moduleRef.get<LoanService>(LoanService);
  });

  describe('updateLoan', () => {
    it('should return the updated loan', async () => {
      // Arrange
      const loanId = 'loanId';
      const update = { loanDate: new Date() };
      const updatedLoan = new LoanDomainModel({
        bookId: 'bookId',
        userId: 'userId',
        loanDate: new Date(),
        returnDate: new Date(),
      });

      loanService.updateLoan = jest.fn().mockResolvedValue(updatedLoan);

      // Act
      const result = await loansController.updateLoan('loanId', {
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
