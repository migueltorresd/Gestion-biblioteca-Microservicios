import { of } from 'rxjs';
import { LoanDomainModel } from 'apps/gestion-de-prestamos/src/domain/models/loan.model';
import { LoanRepository } from '../repositories/loan.repository.mongo';
import { LoanMongoService } from './loan-mongo.service';

describe('LoanMongoService', () => {
  let loanMongoService: LoanMongoService;
  let loanRepository: LoanRepository;

  beforeEach(() => {
    loanRepository = {
      createloan: jest.fn(),
      update: jest.fn(),
    } as unknown as LoanRepository;

    loanMongoService = new LoanMongoService(loanRepository);
  });

  describe('createLoan', () => {
    it('should create a loan and return it as an observable', () => {
      // Arrange
      const loanToCreate: LoanDomainModel = {
        id: '1',
        user: 'user1',
        book: 'book1',
        startDate: new Date(),
        endDate: new Date(),
        status: 'active',
      };
      const createdLoan: LoanDomainModel = {
        ...loanToCreate,
        id: '2',
      };
      jest
        .spyOn(loanRepository, 'createloan')
        .mockReturnValueOnce(of(createdLoan));

      // Act
      const result = loanMongoService.createLoan(loanToCreate);

      // Assert
      expect(result).toEqual(of(createdLoan));
      expect(loanRepository.createloan).toHaveBeenCalledWith(loanToCreate);
    });
  });

  describe('updateLoan', () => {
    it('should update a loan and return it as an observable', () => {
      // Arrange
      const id = '1';
      const update = { status: 'returned' };
      const updatedLoan: LoanDomainModel = {
        user: 'user1',
        book: 'book1',
        startDate: new Date(),
        endDate: new Date(),
      };
      jest.spyOn(loanRepository, 'update').mockReturnValueOnce(of(updatedLoan));

      // Act
      const result = loanMongoService.updateLoan(id, update);

      // Assert
      expect(result).toEqual(of(updatedLoan));
      expect(loanRepository.update).toHaveBeenCalledWith(id, update);
    });
  });
});
