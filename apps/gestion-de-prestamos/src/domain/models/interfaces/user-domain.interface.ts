/**
 * Esta interfaz define la estructura de la entidad usuario para la capa de dominio
 *
 * @export
 * @interface IUserDomainInterface // la interfaz de la entidad usuario
 */
export interface IUserDomainInterface {
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
}
