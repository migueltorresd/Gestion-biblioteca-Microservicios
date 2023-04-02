import { ClientProxy } from '@nestjs/microservices';
import { Test, TestingModule } from '@nestjs/testing';
import { NewLoanPublisher } from './new-loan.publisher';
import { UpdateLoanDto } from '../../dto/loan.dto';

describe('NewLoanPublisher', () => {
  let newLoanPublisher: NewLoanPublisher;
  let clientProxy: ClientProxy;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        NewLoanPublisher,
        {
          provide: 'GESTION_DE_PRESTAMOS_SERVICE',
          useValue: {
            emit: jest.fn(),
          },
        },
      ],
    }).compile();

    newLoanPublisher = module.get<NewLoanPublisher>(NewLoanPublisher);
    clientProxy = module.get<ClientProxy>('GESTION_DE_PRESTAMOS_SERVICE');
  });

  describe('publish', () => {
    it('should emit new-loan event with provided data', () => {
      // Arrange
      const data: UpdateLoanDto = {
        bookId: '',
        userId: '',
        loanDate: undefined,
        returnDate: undefined,
      };

      // Act
      newLoanPublisher.publish(data);

      // Assert
      expect(clientProxy.emit).toHaveBeenCalledWith(
        'new-loan',
        JSON.stringify(data),
      );
    });
  });
});
