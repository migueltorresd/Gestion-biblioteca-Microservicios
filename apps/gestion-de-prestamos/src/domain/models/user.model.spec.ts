import { UserDomainModel } from './user.model';

describe('UserDomainModel', () => {
  describe('constructor', () => {
    test('should create a new instance with default values when no data is provided', () => {
      // Arrange
      const data = undefined;

      // Act
      const user = new UserDomainModel(data);

      // Assert
      expect(user.name).toBe(undefined);
      expect(user.email).toBe(undefined);
      expect(user.doument).toBe(undefined);
      expect(user.phone).toBe(undefined);
      expect(user.user).toBe(undefined);
      expect(user.password).toBe(undefined);
      expect(user.lender).toBe(undefined);
    });

    test('should create a new instance with provided values when data is provided', () => {
      // Arrange
      const data = {
        name: 'John',
        email: 'john@ejemplo.com',
        doument: '1234567890',
        phone: '555-555-5555',
        user: 'john',
        password: 'password',
        lender: '1,2,3',
      };

      // Act
      const user = new UserDomainModel(data);

      // Assert
      expect(user.name).toBe('John');
      expect(user.email).toBe('john@ejemplo.com');
      expect(user.doument).toBe('1234567890');
      expect(user.phone).toBe('555-555-5555');
      expect(user.user).toBe('john');
      expect(user.password).toBe('password');
      expect(user.lender).toBe('1,2,3');
    });
  });
});
