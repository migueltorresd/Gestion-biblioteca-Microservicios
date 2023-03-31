import { Observable } from 'rxjs';
import { LoanDomainModel } from '../../domain/models/loan.model';
import { ILoanDomainServiceInterface } from '../../domain/services/loan.service';

export class CreateLoanUseCase {
  constructor(
    private loanService: ILoanDomainServiceInterface<LoanDomainModel>,
  ) {}

  execute(loanEntity: LoanDomainModel): Observable<LoanDomainModel> {
    return this.loanService.createLoan(loanEntity);
  }
}
