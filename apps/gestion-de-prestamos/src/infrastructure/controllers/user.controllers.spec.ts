import { Test, TestingModule } from '@nestjs/testing';

import { UserService } from '../services/user.service';
import { CreateUserUseCase } from '../../application/create-user/create-user.usecase';
import { UserDomainModel } from '../../domain/models/user.model';
import { CreateUserDto } from '../dto/user.dto';
import { of } from 'rxjs';
import { UserController } from './user.controllers';
import { UserRepository } from '../persistence/database/mongo/repositories/user.repository.mongo';

describe('UserController', () => {
  let controller: UserController;
  let userService: UserService;
  let userRepository: UserRepository;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserController],
      providers: [UserService, CreateUserUseCase, UserRepository],
    }).compile();

    controller = module.get<UserController>(UserController);
    userService = module.get<UserService>(UserService);
    userRepository = module.get<UserRepository>(UserRepository);
  });
  describe('createUser', () => {
    it('should create a user and return it as an Observable', () => {
      // Arrange
      const userDto: CreateUserDto = {
        name: 'John Doe',
        email: 'johndoe@example.com',
        doument: '123456789',
        password: 'password',
        phone: '123456789',
        user: 'johndoe',
        lender: 'lender',
      };
      const userDomainModel: UserDomainModel = {
        name: 'John Doe',
        email: 'johndoe@example.com',
        doument: '123456789',
        password: 'password',
        phone: '123456789',
        user: 'johndoe',
        lender: 'lender',
      };
      jest
        .spyOn(CreateUserUseCase.prototype, 'execute')
        .mockReturnValueOnce(of(userDomainModel));

      // Act
      const result = controller.createUser(userDto);

      // Assert
      expect(userService).toBeDefined();
      expect(CreateUserUseCase).toHaveBeenCalledWith(userService);
      expect(CreateUserUseCase.prototype.execute).toHaveBeenCalledWith(userDto);
      expect(result).toEqual(of(userDomainModel));
    });
  });
});
