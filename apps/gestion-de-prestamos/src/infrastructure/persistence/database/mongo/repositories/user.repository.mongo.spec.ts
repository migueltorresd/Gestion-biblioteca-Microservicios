import { getModelToken } from '@nestjs/mongoose';
import { TestingModule, Test } from '@nestjs/testing';
import { UserDomainModel } from '../../../../../domain/models/user.model';
import { Model } from 'mongoose';
import { userDocument, UserSchemaMongo } from '../schemas/user.schema';
import { UserRepository } from './user.repository.mongo';

describe('UserRepository', () => {
  let userRepository: UserRepository;
  let userModel: Model<userDocument>;

  beforeEach(async () => {
    const moduleRef: TestingModule = await Test.createTestingModule({
      providers: [
        UserRepository,
        {
          provide: getModelToken(UserSchemaMongo.name),
          useValue: {
            create: jest.fn(),
          },
        },
      ],
    }).compile();
    userRepository = moduleRef.get<UserRepository>(UserRepository);
    userModel = moduleRef.get<Model<userDocument>>(
      getModelToken(UserSchemaMongo.name),
    );
  });

  describe('create', () => {
    it('should create a user and return the created user', async () => {
      // Arrange
      const mockUser = new UserDomainModel({
        name: 'John Doe',
        email: 'john.doe@example.com',
        doument: '123456789',
        phone: '555-1234',
        user: 'johndoe',
        password: 'secretpassword',
        lender: 'true',
      });

      const expectedResult = mockUser;
      jest.spyOn(userModel, 'create').mockResolvedValueOnce(mockUser as any);

      // Act
      const result = await userRepository.create(mockUser).toPromise();

      // Assert
      expect(result).toEqual(expectedResult);
    });
  });
});
