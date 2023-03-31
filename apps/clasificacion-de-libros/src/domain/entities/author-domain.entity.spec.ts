import { AuthorDomainEntity } from './author-domain.entity';

describe('AuthorDomainEntity', () => {
  describe('constructor', () => {
    test('should create an instance of AuthorDomainEntity', () => {
      // Arrange
      const data = {
        _id: '1',
        name: 'Jane Austen',
        literaryGenre: 'Romanticism',
        birthDate: new Date('1775-12-16'),
      };

      // Act
      const author = new AuthorDomainEntity(data);

      // Assert
      expect(author).toBeInstanceOf(AuthorDomainEntity);
      expect(author._id).toBe(data._id);
      expect(author.name).toBe(data.name);
      expect(author.literaryGenre).toBe(data.literaryGenre);
      expect(author.birthDate).toBe(data.birthDate);
    });

    test('should create an instance of AuthorDomainEntity with undefined properties', () => {
      // Arrange
      const data = undefined;

      // Act
      const author = new AuthorDomainEntity(data);

      // Assert
      expect(author).toBeInstanceOf(AuthorDomainEntity);
      expect(author._id).toBeUndefined();
      expect(author.name).toBeUndefined();
      expect(author.literaryGenre).toBeUndefined();
      expect(author.birthDate).toBeUndefined();
    });
  });
});
