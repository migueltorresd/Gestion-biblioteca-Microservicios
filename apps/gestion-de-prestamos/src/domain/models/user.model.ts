import { IUserDomainInterface } from './interfaces/user-domain.interface';

/**
 * Esta clase representa la entidad de usuario del dominio
 * @param {name} string // el nombre del usuario
 * @param {email} string // el correo del usuario
 * @param {doument} string // el documento del usuario
 * @param {phone} string // el telefono del usuario
 * @param {user} string // el usuario del para login
 * @param {password} string // el password del usuario
 * @param {lender} string // los prestamos de libros del usuario
 *
 * @export
 * @class UserDomainModel
 * @implements {IUserDomainInterface}
 */
export class UserDomainModel implements IUserDomainInterface {
  name: string;
  email: string;
  doument: string;
  phone: string;
  user: string;
  password: string;
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
