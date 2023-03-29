/**
 * Esta interfaz define la estructura de la entidad usuario
 *
 * @param {string} name // el nombre del usuario
 * @param {string} email // el correo del usuario
 * @param {string} doument // el documento del usuario
 * @param {string} phone // el telefono del usuario
 * @param {string} user // el usuario para el login
 * @param {string} password // la contraseña del usuario
 * @param {string} lender // los prestamos de libros del usuario
 * @export
 * @interface IUserDomainInterface // la interfaz de la entidad usuario
 */
export interface IUserDomainInterface {
  name: string;
  email: string;
  doument: string;
  phone: string;
  user: string;
  password: string;
  lender: string;
}
