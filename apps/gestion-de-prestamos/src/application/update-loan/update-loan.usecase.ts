import { Observable } from 'rxjs';
import { LoanDomainModel } from '../../domain/models/loan.model';
import { ILoanDomainServiceInterface } from '../../domain/services/loan.service';

/**
 * Este caso de uso es el encargado de actualizar un prestamo
 *
 * @export
 * @class UpdateLoanUseCase
 */
export class UpdateLoanUseCase {
  /**
   * este contructor es el encargado de inyectar el servicio de dominio
   * de prestamo
   * @param {ILoanDomainServiceInterface<LoanDomainModel>} loanService
   * @memberof UpdateLoanUseCase
   */
  constructor(
    private loanService: ILoanDomainServiceInterface<LoanDomainModel>,
  ) {}

  /**
   * Este metodo es el encargado de ejecutar el caso de uso de actualizar un prestamo
   *
   * @param {LoanDomainModel} loanEntity // recibe un LoanDomainModel
   * @return {Observable<LoanDomainModel>} // retorna un observable de un LoanDomainModel
   * @memberof UpdateLoanUseCase
   */
  updateLoan(loanEntity: LoanDomainModel): Observable<LoanDomainModel> {
    return this.loanService.updateLoan(loanEntity);
  }
}
