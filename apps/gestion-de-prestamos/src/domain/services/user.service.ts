import { Observable } from 'rxjs';

/**
 * ESTA INTERFAZ ES LA ENCARGADA DE DEFINIR LOS METODOS DEL SERVICIO DE USUARIO
 *
 * @export
 * @interface IUserDomainInterface // la interfaz del servicio de usuario
 * @typedef {IUserDomainInterface} // el tipo de la interfaz del servicio de usuario
 * @template UserDomainModel
 */
export interface IUserDomainInterface<UserDomainModel> {
  /**
   * ESTE METODO ES EL ENCARGADO DE CREAR UN USUARIO
   *
   * @param {UserDomainModel} userEntity // la entidad de usuario
   * @returns {Observable<UserDomainModel>} // la entidad de usuario
   */
  createUser(userEntity: UserDomainModel): Observable<UserDomainModel>;
}
