import { validate } from 'class-validator';
import { CreateUserDto } from './user.dto';

describe('CreateUserDto', () => {
  describe('name', () => {
    it('should be a string', async () => {
      // Arrange
      const createUserDto = new CreateUserDto();
      createUserDto.name = '123';

      // Act
      const errors = await validate(createUserDto);

      // Assert
      expect(errors.length).toBeGreaterThan(0);
      expect(errors[0].constraints).toHaveProperty('isString');
    });
  });

  describe('email', () => {
    it('should be a string', async () => {
      // Arrange
      const createUserDto = new CreateUserDto();
      createUserDto.email = '123';

      // Act
      const errors = await validate(createUserDto);

      // Assert
      expect(errors.length).toBeGreaterThan(0);
      expect(errors[0].constraints).toHaveProperty('isString');
    });

    // it('should be a valid email address', async () => {
    //   // Arrange
    //   const createUserDto = new CreateUserDto();
    //   createUserDto.email = 'john.doe@example.com';

    //   // Act
    //   const errors = await validate(createUserDto);

    //   // Assert
    //   expect(errors.length).toBe(0);
    // });
  });

  describe('document', () => {
    it('should be a string', async () => {
      // Arrange
      const createUserDto = new CreateUserDto();
      createUserDto.doument = '123';

      // Act
      const errors = await validate(createUserDto);

      // Assert
      expect(errors.length).toBeGreaterThan(0);
      expect(errors[0].constraints).toHaveProperty('isString');
    });
  });

  describe('phone', () => {
    it('should be a string', async () => {
      // Arrange
      const createUserDto = new CreateUserDto();
      createUserDto.phone = '123';

      // Act
      const errors = await validate(createUserDto);

      // Assert
      expect(errors.length).toBeGreaterThan(0);
      expect(errors[0].constraints).toHaveProperty('isString');
    });
  });

  describe('user', () => {
    it('should be a string', async () => {
      // Arrange
      const createUserDto = new CreateUserDto();
      createUserDto.user = '123';

      // Act
      const errors = await validate(createUserDto);

      // Assert
      expect(errors.length).toBeGreaterThan(0);
      expect(errors[0].constraints).toHaveProperty('isString');
    });
  });

  describe('password', () => {
    it('should be a string', async () => {
      // Arrange
      const createUserDto = new CreateUserDto();
      createUserDto.password = '123';

      // Act
      const errors = await validate(createUserDto);

      // Assert
      expect(errors.length).toBeGreaterThan(0);
      expect(errors[0].constraints).toHaveProperty('isString');
    });
  });

  describe('lender', () => {
    it('should be a string', async () => {
      // Arrange
      const createUserDto = new CreateUserDto();
      createUserDto.lender = '123';

      // Act
      const errors = await validate(createUserDto);

      // Assert
      expect(errors.length).toBeGreaterThan(0);
      expect(errors[0].constraints).toHaveProperty('isString');
    });
  });
});
