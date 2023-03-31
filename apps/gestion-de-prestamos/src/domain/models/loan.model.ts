import { ILoanDomainInterface } from './interfaces/loan-domain.interface';

export class LoanDomainModel implements ILoanDomainInterface {
  bookId: string;
  userId: string;
  loanDate: Date;
  returnDate: Date;

  constructor(data: ILoanDomainInterface) {
    this.bookId = data && data.bookId;
    this.userId = data && data.userId;
    this.loanDate = data && data.loanDate;
    this.returnDate = data && data.returnDate;
  }
}
