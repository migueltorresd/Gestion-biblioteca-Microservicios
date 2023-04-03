import { IUserDomainInterface } from './interfaces/user-domain.interface';

/**
 * Esta clase representa la entidad de usuario del dominio de la aplicación
 *
 * @export
 * @class UserDomainModel
 * @implements {IUserDomainInterface}
 */
export class UserDomainModel implements IUserDomainInterface {
  /**
   * nombre del usuario
   *
   * @type {string}
   */
  name: string;
  /**
   * correo del usuario
   *
   * @type {string}
   */
  email: string;
  /**
   * documento del usuario
   *
   * @type {string}
   */
  doument: string;
  /**
   * telefono del usuario
   *
   * @type {string}
   */
  phone: string;
  /**
   * tipo admin o usuario
   *
   * @type {string}
   */
  user: string;
  /**
   * contraseña del usuario
   *
   * @type {string}
   */
  password: string;
  /**
   * estado de prestamo
   *
   * @type {string}
   */
  lender: string;

  /**
   * se crea una instancia de la entidad de usuario
   * @param {IUserDomainInterface} data // los datos de la entidad de usuario
   * @memberof UserDomainModel
   */
  constructor(data: IUserDomainInterface) {
    this.name = data && data.name;
    this.email = data && data.email;
    this.doument = data && data.doument;
    this.phone = data && data.phone;
    this.user = data && data.user;
    this.password = data && data.password;
    this.lender = data && data.lender;
  }
}
