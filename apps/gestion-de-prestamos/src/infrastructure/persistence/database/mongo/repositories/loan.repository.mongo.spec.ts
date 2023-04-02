import { getModelToken } from '@nestjs/mongoose';
import { TestingModule, Test } from '@nestjs/testing';
import { LoanDomainModel } from '../../../../../domain/models/loan.model';
import { Model } from 'mongoose';
import { loanDocument, LoanSchemaMongo } from '../schemas/loan.schema';
import { LoanRepository } from './loan.repository.mongo';

describe('LoanRepository', () => {
  let loanRepository: LoanRepository;
  let loanModel: Model<loanDocument>;
  let module: TestingModule;

  beforeEach(async () => {
    module = await Test.createTestingModule({
      providers: [
        LoanRepository,
        {
          provide: getModelToken(LoanSchemaMongo.name),
          useValue: {
            create: jest.fn(),
            findById: jest.fn(),
            updateOne: jest.fn(),
          },
        },
      ],
    }).compile();

    loanRepository = module.get<LoanRepository>(LoanRepository);
    loanModel = module.get<Model<loanDocument>>(
      getModelToken(LoanSchemaMongo.name),
    );
  });

  describe('createLoan', () => {
    it('should create a loan and return the created loan', (done) => {
      // Arrange
      const mockLoan = new LoanDomainModel({
        bookId: '123',
        userId: '123',
        loanDate: new Date(),
        returnDate: new Date(),
      });

      const expectedLoan = {
        ...mockLoan,
        _bookId: '123',
        userId: '123',
        loanDate: new Date(),
        returnDate: new Date(),
      };

      const loanModel: any = module.get(getModelToken(LoanSchemaMongo.name));

      loanModel.create.mockResolvedValueOnce(expectedLoan as any);
      loanModel.findById.mockResolvedValueOnce(expectedLoan as any);

      // Act
      const result$ = loanRepository.createloan(mockLoan);

      // Assert
      result$.subscribe((result) => {
        expect(result).toEqual(expectedLoan);
        expect(loanModel.create).toHaveBeenCalledTimes(1);
        expect(loanModel.create).toHaveBeenCalledWith(mockLoan);
        expect(loanModel.findById).toHaveBeenCalledTimes(1);
        done();
      });
    });
  });
});

//   describe('updateLoan', () => {
//     it('should update a loan and return the updated loan', (done) => {
//       // Arrange
//       const mockLoanId = 'mockId';
//       const mockUpdate = {
//         amount: 2000,
//       };

//       loanModel.updateOne.mockResolvedValueOnce({} as any);

//       // Act
//       const result$ = loanRepository.updateLoan(mockLoanId, mockUpdate);

//       // Assert
//       result$.subscribe((result) => {
//         expect(result).toEqual(expectedLoan);
//         expect(loanModel.updateOne).toHaveBeenCalledTimes(1);
//         expect(loanModel.updateOne).toHaveBeenCalledWith(
//           { _id: mockLoanId },
//           mockUpdate,
//         );
//         done();
//       });
//     });
//   });
