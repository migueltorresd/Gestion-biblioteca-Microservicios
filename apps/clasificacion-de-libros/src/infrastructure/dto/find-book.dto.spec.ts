import { IsString, validate } from 'class-validator';
import { BookDto } from '.';

describe('BookDto', () => {
  let dto: BookDto;

  beforeEach(() => {
    dto = new BookDto();
  });

  it('should be defined', () => {
    // Arrange + Act: already done in beforeEach

    // Assert
    expect(dto).toBeDefined();
  });

  it('should have a valid title', async () => {
    // Arrange
    dto.title = '';

    // Act
    const errors = await validate(dto);

    // Assert
    expect(errors.length).toBe(1);
    expect(errors[0].constraints).toHaveProperty('isString');
  });

  it('should have a valid author', async () => {
    // Arrange
    dto.author = null;

    // Act
    const errors = await validate(dto);

    // Assert
    expect(errors[0].constraints).toHaveProperty('isString');
  });
});
