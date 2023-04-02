import { UserService } from './user.service';
import { UserMongoService } from '../persistence/database/mongo/services/user-mongo.service';

describe('UserService', () => {
  let userService: UserService;
  let userMongoService: UserMongoService;

  beforeEach(() => {
    userMongoService = new UserMongoService();
    userService = new UserService(userMongoService);
  });

  describe('when creating a user', () => {
    it('should call create method of UserMongoService', async () => {
      // Arrange
      const userData = {
        name: 'John Doe',
        email: 'john.doe@example.com',
        document: '123456789',
        phone: '123456789',
        user: 'johndoe',
        password: 'pass123',
        lender: 'lender',
      };

      const createSpy = jest.spyOn(userMongoService, 'create');

      // Act
      await userService.create(userData);

      // Assert
      expect(createSpy).toHaveBeenCalledTimes(1);
      expect(createSpy).toHaveBeenCalledWith(userData);
    });
  });

  describe('when getting a user by id', () => {
    it('should call getById method of UserMongoService', async () => {
      // Arrange
      const userId = '123456789';
      const getByIdSpy = jest.spyOn(userMongoService, 'getById');

      // Act
      await userService.getById(userId);

      // Assert
      expect(getByIdSpy).toHaveBeenCalledTimes(1);
      expect(getByIdSpy).toHaveBeenCalledWith(userId);
    });
  });

  describe('when updating a user', () => {
    it('should call update method of UserMongoService', async () => {
      // Arrange
      const userId = '123456789';
      const userData = {
        name: 'John Doe',
        email: 'john.doe@example.com',
        document: '123456789',
        phone: '123456789',
        user: 'johndoe',
        password: 'pass123',
        lender: 'lender',
      };

      const updateSpy = jest.spyOn(userMongoService, 'update');

      // Act
      await userService.update(userId, userData);

      // Assert
      expect(updateSpy).toHaveBeenCalledTimes(1);
      expect(updateSpy).toHaveBeenCalledWith(userId, userData);
    });
  });

  describe('when deleting a user', () => {
    it('should call deleteById method of UserMongoService', async () => {
      // Arrange
      const userId = '123456789';
      const deleteByIdSpy = jest.spyOn(userMongoService, 'deleteById');

      // Act
      await userService.deleteById(userId);

      // Assert
      expect(deleteByIdSpy).toHaveBeenCalledTimes(1);
      expect(deleteByIdSpy).toHaveBeenCalledWith(userId);
    });
  });
});
