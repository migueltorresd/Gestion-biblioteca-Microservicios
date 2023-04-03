import { Observable } from 'rxjs';

/**
 * este metodo es el encargado de crear un prestamo
 *
 * @export
 * @interface ILoanDomainServiceInterface // la interfaz del servicio de prestamo
 * @typedef {ILoanDomainServiceInterface} //  el tipo de la interfaz del servicio de prestamo
 * @template LoanDomainModel
 */
export interface ILoanDomainServiceInterface<LoanDomainModel> {
  /**
   * Este metodo es el encargado de crear un prestamo
   *
   * @param {LoanDomainModel} loanEntity // la entidad de prestamo
   * @returns {Observable<LoanDomainModel>} // la entidad de prestamo
   */
  createLoan(loanEntity: LoanDomainModel): Observable<LoanDomainModel>;
  /**
   * Este metodo es el encargado de actualizar un prestamo
   *
   * @param {LoanDomainModel} loanEntity // la entidad de prestamo
   * @returns {Observable<LoanDomainModel>} // la entidad de prestamo
   */
  updateLoan(loanEntity: LoanDomainModel): Observable<LoanDomainModel>;
}
