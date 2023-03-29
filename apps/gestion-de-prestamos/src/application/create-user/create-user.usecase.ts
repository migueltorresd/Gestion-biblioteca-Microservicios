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

  execute(userEntity: UserDomainModel): Observable<UserDomainModel> {
    return this.userService.createUser(userEntity);
  }
}
