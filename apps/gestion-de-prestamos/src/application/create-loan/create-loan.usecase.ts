import { Observable } from 'rxjs';
import { ILoanDomainInterface } from '../../domain/models/interfaces/loand-domain.interface';
import { LoanDomainModel } from '../../domain/models/loan.model';

export class CreateLoanUseCase {
  constructor(private readonly loanService: ILoanDomainInterface) {}

  execute(loanEntity: LoanDomainModel): Observable<LoanDomainModel> {
    return this.loanService.createLoan(loanEntity);
  }
}
