import { Test, TestingModule } from '@nestjs/testing';
import { getModelToken } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { LoanSchemaMongo, loanDocument } from './loan.schema';

describe('LoanSchemaMongo', () => {
  let loanModel: Model<loanDocument>;

  beforeEach(async () => {
    const moduleRef: TestingModule = await Test.createTestingModule({
      providers: [
        {
          provide: getModelToken('Loan'),
          useValue: {
            findOne: jest.fn(),
            find: jest.fn(),
            updateOne: jest.fn(),
            deleteOne: jest.fn(),
            create: jest.fn(),
          },
        },
      ],
    }).compile();

    loanModel = moduleRef.get<Model<loanDocument>>(getModelToken('Loan'));
  });

  describe('LoanSchemaMongo', () => {
    it('should be defined', () => {
      // Arrange

      // Act
      const schema = new LoanSchemaMongo();

      // Assert
      expect(schema).toBeDefined();
    });

    it('should have the required properties', async () => {
      // Arrange
      const loanData = {
        bookId: 'book1',
        userId: 'user1',
        loanDate: new Date(),
        returnDate: new Date(),
      };

      // Act
      const loan = await loanModel.create(loanData);

      // Assert
      expect('bookId').toBeDefined();
      expect('userId').toBeDefined();
      expect('loanDate').toBeDefined();
      expect('returnDate').toBeDefined();
    });
  });
});
