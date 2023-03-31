import { of, throwError } from 'rxjs';
import { CreateUserUseCase } from './create-user.usecase';
import { UserDomainModel } from '../../domain/models/user.model';

describe('CreateUserUseCase', () => {
  let useCase: CreateUserUseCase;
  let userServiceMock: any;

  beforeEach(() => {
    userServiceMock = {
      createUser: jest.fn(),
    };
    useCase = new CreateUserUseCase(userServiceMock);
  });

  it('should create a user', (done) => {
    // Arrange
    const userEntity: UserDomainModel = {
      name: 'Juan',
      email: 'juan@example.com',
      doument: '123456789',
      phone: '555-5555',
      user: 'juan123',
      password: 'password123',
      lender: '1 libro',
    };
    const expectedUser: UserDomainModel = {
      ...userEntity,
      name: 'Juan',
      email: 'juan@example.com',
      doument: '123456789',
      phone: '555-5555',
      user: 'juan123',
      password: 'password123',
      lender: '1 libro',
    };
    userServiceMock.createUser.mockReturnValueOnce(of(expectedUser));

    // Act
    useCase.execute(userEntity).subscribe((createdUser) => {
      // Assert
      expect(createdUser).toEqual(expectedUser);
      expect(userServiceMock.createUser).toHaveBeenCalledWith(userEntity);
      done();
    });
  });

  it('should return an error if user could not be created', (done) => {
    // Arrange
    const userEntity: UserDomainModel = {
      name: 'Juan',
      email: 'juan@example.com',
      doument: '123456789',
      phone: '555-5555',
      user: 'juan123',
      password: 'password123',
      lender: '1 libro',
    };
    const error = new Error('Could not create user');
    userServiceMock.createUser.mockReturnValueOnce(throwError(error));

    // Act
    useCase.execute(userEntity).subscribe(
      (createdUser) => {
        // This block should not be executed
        done.fail('Should have thrown an error');
      },
      (err) => {
        // Assert
        expect(err).toEqual(error);
        expect(userServiceMock.createUser).toHaveBeenCalledWith(userEntity);
        done();
      },
    );
  });
});
