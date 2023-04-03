import { Injectable } from '@nestjs/common';
import { IUserDomainInterface } from '../../../../../domain/services/user.service';
import { UserRepository } from '../repositories/user.repository.mongo';
import { UserSchemaMongo } from '../schemas/user.schema';
import { from, Observable } from 'rxjs';
import { UserDomainModel } from '../../../../../domain/models/user.model';

/**
 * Esta clase es la encargada de implementar los métodos de la interfaz IUserDomainInterface
 * para poder ser utilizados por el controlador de usuarios
 *
 * @export
 * @class UserMongoService
 * @implements {IUserDomainInterface<UserSchemaMongo>}
 */
@Injectable()
export class UserMongoService implements IUserDomainInterface<UserSchemaMongo> {
  /**
   * Este constructor es el encargado de inyectar el repositorio de usuarios
   * para poder utilizarlo en los métodos de esta clase
   *
   * @constructor
   * @param {UserRepository} userRepository // repositorio de usuarios
   */
  constructor(private readonly userRepository: UserRepository) {}

  /**
   * Este método es el encargado de crear un usuario en la base de datos
   * y retornarlo como un observable
   *
   * @param {UserDomainModel} userEntity // Este es el usuario que se va a crear
   * @return {Observable<UserDomainModel>} // Este es el usuario que se creó
   * @memberof UserMongoService
   */
  createUser(userEntity: UserDomainModel): Observable<UserDomainModel> {
    console.log(userEntity);
    return from(this.userRepository.create(userEntity));
  }
}
