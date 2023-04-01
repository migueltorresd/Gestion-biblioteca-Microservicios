import { UserMongoService } from './user-mongo.service';
import { UserRepository } from '../repositories/user.repository.mongo';
import { UserDomainModel } from '../../../.../../../../domain/models/user.model';
import { of } from 'rxjs';

describe('UserMongoService', () => {
  let userMongoService: UserMongoService;
  let userRepository: UserRepository;

  beforeEach(() => {
    userRepository = {
      create: jest.fn(),
    } as unknown as UserRepository;

    userMongoService = new UserMongoService(userRepository);
  });

  describe('createUser', () => {
    it('should create a user and return it as an observable', async () => {
      // Arrange
      const userToCreate: UserDomainModel = {
        name: 'Juan',
        email: 'juan@example.com',
        doument: '123456789',
        phone: '555-5555',
        user: 'juan123',
        password: 'password123',
        lender: '1 libro',
      };
      const createdUser: UserDomainModel = {
        ...userToCreate,
        name: 'Juan',
        email: 'juan@example.com',
        doument: '123456789',
        phone: '555-5555',
        user: 'juan123',
        password: 'password123',
        lender: '1 libro',
      };
      jest.spyOn(userRepository, 'create').mockReturnValueOnce(of(createdUser));

      // Act
      const result = await userMongoService
        .createUser(userToCreate)
        .toPromise();

      // Assert
      expect(result).toEqual(createdUser);
      expect(userRepository.create).toHaveBeenCalledWith(userToCreate);
    });
  });
});
