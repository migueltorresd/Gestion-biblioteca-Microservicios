import { Observable } from 'rxjs';

export interface ILoanDomainInterface<LoanDomainModel> {
  CreateLoan(loanEntity: LoanDomainModel): Observable<LoanDomainModel>;
  updateLoan(loanEntity: LoanDomainModel): Observable<LoanDomainModel>;
}
