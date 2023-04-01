import { AuthorDomainEntity } from '../../../../domain/entities';
import { AuthorEntityMongo } from './autor.entity';

describe('AuthorEntityMongo', () => {
  let authorEntity: AuthorEntityMongo;

  beforeEach(() => {
    authorEntity = new AuthorEntityMongo({
      _id: '123',
      name: 'pepe',
      literaryGenre: 'Fantasia',
      birthDate: new Date(1965, 6, 31),
    });

    authorEntity._id = '123';
    authorEntity.name = 'J.K. Rowling';
    authorEntity.literaryGenre = 'Fantasy';
    authorEntity.birthDate = new Date(1965, 6, 31);
  });

  describe('Constructor', () => {
    test('should create an instance of AuthorEntityMongo', () => {
      expect(authorEntity).toBeDefined();
      expect(authorEntity).toBeInstanceOf(AuthorEntityMongo);
      expect(authorEntity).toBeInstanceOf(AuthorDomainEntity);
    });

    test('should set properties correctly', () => {
      expect(authorEntity._id).toBe('123');
      expect(authorEntity.name).toBe('J.K. Rowling');
      expect(authorEntity.literaryGenre).toBe('Fantasy');
      expect(authorEntity.birthDate).toEqual(new Date(1965, 6, 31));
    });
  });

  describe('Properties', () => {
    test('should have _id property', () => {
      expect(authorEntity).toHaveProperty('_id');
      expect(authorEntity._id).toBe('123');
    });

    test('should have name property', () => {
      expect(authorEntity).toHaveProperty('name');
      expect(authorEntity.name).toBe('J.K. Rowling');
    });

    test('should have literaryGenre property', () => {
      expect(authorEntity).toHaveProperty('literaryGenre');
      expect(authorEntity.literaryGenre).toBe('Fantasy');
    });

    test('should have birthDate property', () => {
      expect(authorEntity).toHaveProperty('birthDate');
      expect(authorEntity.birthDate).toEqual(new Date(1965, 6, 31));
    });
  });
});
