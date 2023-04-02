import { IsString, validate } from 'class-validator';
import { DeleteBookDto } from './delete.dto';

describe('DeleteBookDto', () => {
  let dto: DeleteBookDto;

  beforeEach(() => {
    dto = new DeleteBookDto();
    dto._id = '123';
  });

  describe('Validation', () => {
    it('should be defined', () => {
      // Arrange

      // Act

      // Assert
      expect(dto).toBeDefined();
    });

    it('should have a valid _id', async () => {
      // Arrange
      dto._id = null;

      // Act
      const errors = await validate(dto);

      // Assert
      expect(errors.length).toBe(1);
      expect(errors[0].property).toBe('_id');
      expect(errors[0].constraints).toHaveProperty('isString');
    });
  });
});
