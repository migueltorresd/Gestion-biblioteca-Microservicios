import { Observable } from 'rxjs';
import { LoanDomainModel } from '../../domain/models/loan.model';
import { ILoanDomainServiceInterface } from '../../domain/services/loan.service';

/**
 * Este caso de uso es el encargado de crear un prestamo
 *
 *
 * @export
 * @class CreateLoanUseCase
 */
export class CreateLoanUseCase {
  constructor(
    private loanService: ILoanDomainServiceInterface<LoanDomainModel>,
  ) {}

  /**
   * Este metodo es el encargado de ejecutar el caso de uso de crear un prestamo
   *
   * @param {LoanDomainModel} loanEntity // recibe un LoanDomainModel
   * @return {Observable<LoanDomainModel>} // retorna un observable de un LoanDomainModel
   * @memberof CreateLoanUseCase
   */
  execute(loanEntity: LoanDomainModel): Observable<LoanDomainModel> {
    return this.loanService.createLoan(loanEntity);
  }
}
