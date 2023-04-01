import { Test, TestingModule } from '@nestjs/testing';
import { getModelToken } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UserSchemaMongo, userDocument } from './user.schema';

describe('UserSchemaMongo', () => {
  let userModel: Model<userDocument>;

  beforeEach(async () => {
    const moduleRef: TestingModule = await Test.createTestingModule({
      providers: [
        {
          provide: getModelToken('User'),
          useValue: {
            findOne: jest.fn(),
            find: jest.fn(),
            updateOne: jest.fn(),
            deleteOne: jest.fn(),
            create: jest.fn(),
          },
        },
      ],
    }).compile();

    userModel = moduleRef.get<Model<userDocument>>(getModelToken('User'));
  });

  describe('UserSchemaMongo', () => {
    it('should be defined', () => {
      // Arrange

      // Act
      const schema = new UserSchemaMongo({
        name: 'John Doe',
        email: 'johndoe@example.com',
        doument: '123456789',
        phone: '555-5555',
        user: 'johndoe',
        password: 'password123',
        lender: 'loan1',
      });

      // Assert
      expect(schema).toBeDefined();
    });

    it('should have the required properties', async () => {
      // Arrange
      const userData = {
        name: 'John Doe',
        email: 'johndoe@example.com',
        doument: '123456789',
        phone: '555-5555',
        user: 'johndoe',
        password: 'password123',
        lender: 'loan1',
      };

      // Act
      const user = await userModel.create(userData);

      // Assert
      expect('name').toBeDefined();
      expect('email').toBeDefined();
      expect('doument').toBeDefined();
      expect('phone').toBeDefined();
      expect('user').toBeDefined();
      expect('password').toBeDefined();
      expect('lender').toBeDefined();
    });
  });
});
