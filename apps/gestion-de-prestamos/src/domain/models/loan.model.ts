import { ILoanDomainInterface } from './interfaces/loan-domain.interface';

/**
 * Esta clase define la estructura de la entidad prestamo y la implementa
 *
 * @export
 * @class LoanDomainModel
 * @implements {ILoanDomainInterface}
 */
export class LoanDomainModel implements ILoanDomainInterface {
  /**
   * id del libro
   *
   * @type {string}
   */
  bookId: string;
  /**
   * id del usuario
   *
   * @type {string}
   */
  userId: string;
  /**
   * titulo del libro
   *
   * @type {?string}
   */
  title?: string;
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

  /**
   * este contructor inicializa los atributos de la entidad prestamo
   *
   * @constructor
   * @param {ILoanDomainInterface} data
   */
  constructor(data: ILoanDomainInterface) {
    this.bookId = data && data.bookId;
    this.userId = data && data.userId;
    this.title = data && data.title;
    this.loanDate = data && data.loanDate;
    this.returnDate = data && data.returnDate;
  }
}
