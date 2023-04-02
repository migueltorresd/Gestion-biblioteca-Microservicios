import { ILoanDomainInterface } from './interfaces/loan-domain.interface';

/**
 * Esta clase define la estructura de la entidad prestamo
 * @Param {string} bookId // el id del libro
 * @Param {string} userId // el id del usuario
 * @Param {string} title // el titulo del libro
 * @Param {Date} loanDate // la fecha de prestamo
 * @Param {Date} returnDate // la fecha de devolucion
 * @export
 * @class LoanDomainModel
 * @implements {ILoanDomainInterface}
 */
export class LoanDomainModel implements ILoanDomainInterface {
  bookId: string;
  userId: string;
  title?: string;
  loanDate: Date;
  returnDate: Date;

  constructor(data: ILoanDomainInterface) {
    this.bookId = data && data.bookId;
    this.userId = data && data.userId;
    this.title = data && data.title;
    this.loanDate = data && data.loanDate;
    this.returnDate = data && data.returnDate;
  }
}
