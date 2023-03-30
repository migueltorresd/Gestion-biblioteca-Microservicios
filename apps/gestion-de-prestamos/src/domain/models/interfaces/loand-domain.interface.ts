/**
 * Esta inteface define la estructura de la entidad prestamo
 * @param {string} bookId // el id del libro
 * @param {string} userId // el id del usuario
 * @param {Date} loanDate // la fecha de prestamo
 * @param {Date} returnDate // la fecha de devolucion
 * @export
 * @interface ILoanDomainInterface // la interfaz de la entidad prestamo
 */
export interface ILoanDomainInterface {
  bookId: string;
  userId: string;
  loanDate: Date;
  returnDate: Date;
}
