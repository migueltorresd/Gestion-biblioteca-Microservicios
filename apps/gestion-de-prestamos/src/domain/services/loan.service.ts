import { Observable } from 'rxjs';

export interface ILoanDomainServiceInterface<LoanDomainModel> {
  createLoan(loanEntity: LoanDomainModel): Observable<LoanDomainModel>;
  updateLoan(loanEntity: LoanDomainModel): Observable<LoanDomainModel>;
}
