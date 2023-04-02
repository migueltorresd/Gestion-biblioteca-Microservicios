import { AuthorDto } from './author.dto';
import { validate } from 'class-validator';

describe('AuthorDto', () => {
  describe('constructor', () => {
    it('should create a new instance of AuthorDto', async () => {
      // Arrange
      const author = new AuthorDto();
      author._id = '1234';
      author.name = 'Gabriel Garcia Marquez';
      author.literaryGenre = 'Magical Realism';
      author.birthDate = new Date('1927-03-06');

      // Act
      const validationErrors = await validate(author);

      // Assert
      expect(author).toBeInstanceOf(AuthorDto);
      expect(validationErrors.length).toBe(0);
    });

    it('should throw an error when _id is not a string', async () => {
      // Arrange
      const author = new AuthorDto();
      author._id = 1234; // should be a string
      author.name = 'Gabriel Garcia Marquez';
      author.literaryGenre = 'Magical Realism';
      author.birthDate = new Date('1927-03-06');

      // Act
      const validationErrors = await validate(author);

      // Assert
      expect(validationErrors.length).toBeGreaterThan(0);
      expect(validationErrors[0].constraints).toHaveProperty('isString');
    });

    it('should throw an error when name is not a string', async () => {
      // Arrange
      const author = new AuthorDto();
      author._id = '1234';
      author.name = 1234; // should be a string
      author.literaryGenre = 'Magical Realism';
      author.birthDate = new Date('1927-03-06');

      // Act
      const validationErrors = await validate(author);

      // Assert
      expect(validationErrors.length).toBeGreaterThan(0);
      expect(validationErrors[0].constraints).toHaveProperty('isString');
    });

    it('should throw an error when literaryGenre is not a string', async () => {
      // Arrange
      const author = new AuthorDto();
      author._id = '1234';
      author.name = 'Gabriel Garcia Marquez';
      author.literaryGenre = 'ciencia'; // should be a string
      author.birthDate = new Date('1927-03-06');

      // Act
      const validationErrors = await validate(author);

      // Assert
      expect(validationErrors.length).toBeGreaterThan(0);
      expect(validationErrors[0].constraints).toHaveProperty('isString');
    });

    it('should throw an error when birthDate is not a Date', async () => {
      // Arrange
      const author = new AuthorDto();
      author._id = '1234';
      author.name = 'Gabriel Garcia Marquez';
      author.literaryGenre = 'Magical Realism';
      author.birthDate = '1927-03-06'; // should be a Date

      // Act
      const validationErrors = await validate(author);

      // Assert
      expect(validationErrors.length).toBeGreaterThan(0);
      expect(validationErrors[0].constraints).toHaveProperty('isDate');
    });
  });
});
