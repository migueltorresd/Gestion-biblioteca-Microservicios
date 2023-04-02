import { Observable } from 'rxjs';
import { UserDomainModel } from '../../domain/models/user.model';
import { IUserDomainInterface } from '../../domain/services/user.service';

/**
 * Este caso de uso se encarga de crear un usuario en la base de datos
 * para eso usamos un contrucyotr que recibe un servicio de usuario
 *
 * @export
 * @class CreateUserUseCase
 */
export class CreateUserUseCase {
  constructor(
    private readonly userService: IUserDomainInterface<UserDomainModel>,
  ) {}

  /**
   * Este metodo es el encargado de ejecutar el caso de uso de crear un usuario
   *
   * @param {UserDomainModel} userEntity // recibe un UserDomainModel
   * @return {{Observable<UserDomainModel>} // retorna un observable de un UserDomainModel
   * @memberof CreateUserUseCase
   */
  execute(userEntity: UserDomainModel): Observable<UserDomainModel> {
    return this.userService.createUser(userEntity);
  }
}
