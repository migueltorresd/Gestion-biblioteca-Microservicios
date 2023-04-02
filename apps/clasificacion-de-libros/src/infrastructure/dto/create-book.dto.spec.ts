import {
  IsString,
  IsNotEmpty,
  IsObject,
  IsDate,
  IsBoolean,
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

  it('should have a valid _id', () => {
    // Arrange
    dto._id = null;

    // Act
    const errors = dto.errors;

    // Assert
    expect(errors.length).toBe(1);
    expect(errors[0].property).toBe('_id');
    expect(errors[0].constraints).toHaveProperty('isString');
  });

  it('should have a valid title', () => {
    // Arrange
    dto.title = '';

    // Act
    const errors = dto.errors;

    // Assert
    expect(errors.length).toBe(1);
    expect(errors[0].property).toBe('title');
    expect(errors[0].constraints).toHaveProperty('isNotEmpty');
  });

  it('should have a valid author', () => {
    // Arrange
    dto.author = null;

    // Act
    const errors = dto.errors;

    // Assert
    expect(errors.length).toBe(1);
    expect(errors[0].property).toBe('author');
    expect(errors[0].constraints).toHaveProperty('isObject');
  });

  it('should have a valid description', () => {
    // Arrange
    dto.description = null;

    // Act
    const errors = dto.errors;

    // Assert
    expect(errors.length).toBe(1);
    expect(errors[0].property).toBe('description');
    expect(errors[0].constraints).toHaveProperty('isString');
  });

  it('should have a valid publishedDate', () => {
    // Arrange
    dto.publishedDate = null;

    // Act
    const errors = dto.errors;

    // Assert
    expect(errors.length).toBe(1);
    expect(errors[0].property).toBe('publishedDate');
    expect(errors[0].constraints).toHaveProperty('isDate');
  });

  it('should have a valid createdAt', () => {
    // Arrange
    dto.createdAt = null;

    // Act
    const errors = dto.errors;

    // Assert
    expect(errors.length).toBe(1);
    expect(errors[0].property).toBe('createdAt');
    expect(errors[0].constraints).toHaveProperty('isDate');
  });

  it('should have a valid updatedLoad', () => {
    // Arrange
    dto.updatedLoad = null;

    // Act
    const errors = dto.errors;

    // Assert
    expect(errors.length).toBe(1);
    expect(errors[0].property).toBe('updatedLoad');
    expect(errors[0].constraints).toHaveProperty('isBoolean');
  });
});
