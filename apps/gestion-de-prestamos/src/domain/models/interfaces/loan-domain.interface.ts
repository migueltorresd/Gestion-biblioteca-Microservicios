/**
 * Esta inteface define la estructura de la entidad prestamo para la capa de dominio
 *
 * @export
 * @interface ILoanDomainInterface // la interfaz de la entidad prestamo
 */
export interface ILoanDomainInterface {
  /**
   * Id del LIBRO
   *
   * @type {string}
   */
  bookId: string;
  /**
   * titulo del libro
   *
   * @type {?string}
   */
  title?: string;
  /**
   * Id del usuario
   *
   * @type {string}
   */
  userId: string;
  /**
   * fecha de prestamo del libro
   *
   * @type {Date}
   */
  loanDate: Date;
  /**
   * fecha de devolucion del libro
   *
   * @type {Date}
   */
  returnDate: Date;
}
