import { Injectable } from '@nestjs/common';
import { LoanDomainModel } from 'apps/gestion-de-prestamos/src/domain/models/loan.model';
import { Observable } from 'rxjs';

import { LoanRepository } from '../repositories/loan.repository.mongo';

/**
 * Este servicio es el encargado de interactuar con el repositorio
 *
 * @export
 * @class LoanMongoService
 * @typedef {LoanMongoService}
 */
@Injectable()
export class LoanMongoService {
  /**
   * Este contructor es el encargado de inyectar el repositorio
   *
   * @constructor
   * @param {LoanRepository} loanRepository // repositorio de prestamos
   */
  constructor(private readonly loanRepository: LoanRepository) {}

  /**
   * Este metodo es el encargado de crear un prestamo en la base de datos
   *
   * @param {LoanDomainModel} loanEntity // prestamo a crear
   * @returns {Observable<LoanDomainModel>}
   */
  createLoan(loanEntity: LoanDomainModel): Observable<LoanDomainModel> {
    return this.loanRepository.createloan(loanEntity);
  }

  /**
   * Este metodo es el encargado de buscar un prestamo por su id
   *
   * @param {string} id // id del prestamo
   * @param {Partial<LoanDomainModel>} update // prestamo a actualizar
   * @returns {Observable<LoanDomainModel>}
   */
  updateLoan(
    id: string,
    update: Partial<LoanDomainModel>,
  ): Observable<LoanDomainModel> {
    return this.loanRepository.update(id, update);
  }
}
