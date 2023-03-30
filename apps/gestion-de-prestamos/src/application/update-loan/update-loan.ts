import { Observable } from 'rxjs';
import { LoanDomainModel } from '../../domain/models/loan.model';
import { ILoanDomainInterface } from '../../domain/services/loan.service';

export class UpdateLoanUseCase {
  constructor(private loanService: ILoanDomainInterface<LoanDomainModel>) {}

  updateLoan(loanEntity: LoanDomainModel): Observable<LoanDomainModel> {
    return this.loanService.updateLoan(loanEntity);
  }
}
