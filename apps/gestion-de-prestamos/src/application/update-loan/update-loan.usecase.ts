import { Observable } from 'rxjs';
import { LoanDomainModel } from '../../domain/models/loan.model';
import { ILoanDomainServiceInterface } from '../../domain/services/loan.service';

export class UpdateLoanUseCase {
  constructor(
    private loanService: ILoanDomainServiceInterface<LoanDomainModel>,
  ) {}

  updateLoan(loanEntity: LoanDomainModel): Observable<LoanDomainModel> {
    return this.loanService.updateLoan(loanEntity);
  }
}
