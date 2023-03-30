import { Observable } from 'rxjs';

export interface ILoanDomainInterface<LoanDomainModel> {
  updateLoan(loanEntity: LoanDomainModel): Observable<LoanDomainModel>;
}
