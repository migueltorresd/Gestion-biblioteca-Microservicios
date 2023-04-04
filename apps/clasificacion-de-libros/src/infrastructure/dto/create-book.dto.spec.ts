import {
  IsString,
  IsNotEmpty,
  IsObject,
  IsDate,
  IsBoolean,
  validate,
} from 'class-validator';
import { createBookDto } from './create-book.dto';

describe('createBookDto', () => {
  let dto: createBookDto;

  beforeEach(() => {
    dto = new createBookDto();
    dto._id = '123';
    dto.title = 'Example Book';
    dto.author = 'John Doe';
    dto.description = 'This is an example book.';
    dto.publishedDate = new Date('2022-01-01');
    dto.createdAt = new Date('2022-01-01');
    dto.updatedLoad = true;
  });

  it('should be defined', () => {
    expect(dto).toBeDefined();
  });

  it('should have a valid _id', async () => {
    // Arrange
    dto._id = null;

    // Act
    const errors = await validate(dto);

    // Assert
    expect(errors.length).toEqual(2);
    expect(errors[0].constraints).toHaveProperty('isString');
  });

  it('should have a valid title', async () => {
    // Arrange
    dto.title = '';

    // Act
    const errors = await validate(dto);

    // Assert
    expect(errors.length).toEqual(2);
    expect(errors[0].property).toBe('title');
    expect(errors[0].constraints).toHaveProperty('isNotEmpty');
  });

  it('should have a valid author', async () => {
    // Arrange
    dto.author = null;

    // Act
    const errors = await validate(dto);

    // Assert
    expect(errors.length).toEqual(1);
    expect(errors[0].constraints).toHaveProperty('isObject');
  });

  it('should have a valid description', async () => {
    // Arrange
    dto.description = null;

    // Act
    const errors = await validate(dto);

    // Assert
    expect(errors.length).toEqual(2);
    expect(errors[1].constraints).toHaveProperty('isString');
  });

  it('should have a valid publishedDate', async () => {
    // Arrange
    dto.publishedDate = null;

    // Act
    const errors = await validate(dto);

    // Assert
    expect(errors.length).toEqual(2);
    expect(errors[1].constraints).toHaveProperty('isDate');
  });

  it('should have a valid createdAt', async () => {
    // Arrange
    dto.createdAt = null;

    // Act
    const errors = await validate(dto);

    // Assert
    expect(errors.length).toEqual(2);
    expect(errors[1].constraints).toHaveProperty('isDate');
  });

  it('should have a valid updatedLoad', async () => {
    // Arrange
    dto.updatedLoad = null;

    // Act
    const errors = await validate(dto);

    // Assert
    expect(errors.length).toEqual(2);
    expect(errors[1].constraints).toHaveProperty('isBoolean');
  });
});
