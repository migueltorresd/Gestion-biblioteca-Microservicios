import { of } from 'rxjs';
import { LoanDomainModel } from '../../../../../domain/models/loan.model';
import { LoanRepository } from '../repositories/loan.repository.mongo';
import { LoanMongoService } from './loans.mongo.service';

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
    it('should create a loan and return it as an observable', async () => {
      // Arrange
      const loanToCreate: LoanDomainModel = {
        userId: 'user1',
        bookId: 'book1',
        loanDate: new Date(),
        returnDate: new Date(),
      };
      const createdLoan: LoanDomainModel = {
        ...loanToCreate,
        userId: 'user1',
        bookId: 'book1',
        loanDate: new Date(),
        returnDate: new Date(),
      };
      jest
        .spyOn(loanRepository, 'createloan')
        .mockReturnValueOnce(of(createdLoan));

      // Act
      const result = await loanMongoService
        .createLoan(loanToCreate)
        .toPromise();

      // Assert
      expect(result).toEqual(createdLoan);
      expect(loanRepository.createloan).toHaveBeenCalledWith(loanToCreate);
    });
  });

  //   describe('updateLoan', () => {
  //     it('should update a loan and return it as an observable', async () => {
  //       // Arrange
  //       const id = '1';
  //       const update = { status: 'returned' };
  //       const updatedLoan: LoanDomainModel = {
  //         userId: 'user1',
  //         bookId: 'book1',
  //         loanDate: new Date(),
  //         returnDate: new Date(),
  //       };
  //       jest.spyOn(loanRepository, 'update').mockReturnValueOnce(of(updatedLoan));

  //       // Act
  //       const result = await loanMongoService.updateLoan(id, update).toPromise();

  //       // Assert
  //       expect(result).toEqual(updatedLoan);
  //       expect(loanRepository.update).toHaveBeenCalledWith(id, update);
  //     });
  //   });
});
