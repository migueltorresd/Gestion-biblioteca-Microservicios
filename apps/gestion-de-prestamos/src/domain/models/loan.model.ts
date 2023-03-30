import { ILoanDomainInterface } from './interfaces/loand-domain.interface';

export class LoanDomainModel implements ILoanDomainInterface {
  bookId: string;
  userId: string;
  loanDate: Date;
  returnDate: Date;

  constructor(data: ILoanDomainInterface) {
    if (data) {
      this.bookId = data.bookId;
      this.userId = data.userId;
      this.loanDate = data.loanDate;
      this.returnDate = data.returnDate;
    }
  }
}
