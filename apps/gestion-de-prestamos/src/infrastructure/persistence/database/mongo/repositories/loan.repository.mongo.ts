import { InjectModel } from '@nestjs/mongoose';
import { LoanDomainModel } from '../../../../../domain/models/loan.model';
import { Model } from 'mongoose';
import { Observable, from, switchMap, map } from 'rxjs';
import { LoanSchemaMongo, loanDocument } from '../schemas/loan.schema';

/**
 * Este repositorio es el encargado de interactuar con la base de datos
 *
 * @export
 * @class LoanRepository
 * @typedef {LoanRepository}
 */
export class LoanRepository {
  /**
   * Este contructor es el encargado de inyectar el modelo de mongoose
   *
   * @constructor
   * @param {Model<LoanSchemaMongo>} loanRepository // recibe un modelo de mongoose
   */
  constructor(
    @InjectModel(LoanSchemaMongo.name)
    private loanRepository: Model<LoanSchemaMongo>,
  ) {}

  /**
   * Este metodo es el encargado de crear un prestamo
   *
   * @returns {Observable<LoanSchemaMongo>} // retorna un observable de un LoanSchemaMongo
   * @param {LoanDomainModel} loanEntity
   * @returns {Observable<LoanSchemaMongo>}
   */
  createloan(loanEntity: LoanDomainModel): Observable<LoanSchemaMongo> {
    return from(this.loanRepository.create(loanEntity)).pipe(
      switchMap((loan) => {
        return this.loanRepository.findById(loan._id);
      }),
    );
  }
  /**
   * Este metodo es el encargado de buscar un prestamo por su id
   *
   * @param {string} id // recibe un id
   * @param {Partial<LoanSchemaMongo>} update // recibe un objeto parcial de LoanSchemaMongo
   * @returns {Observable<LoanSchemaMongo>}
   */
  update(
    id: string,
    update: Partial<LoanSchemaMongo>,
  ): Observable<LoanSchemaMongo> {
    return from(this.loanRepository.updateOne({ _id: id }, update)).pipe(
      map(() => {
        return update as LoanSchemaMongo;
      }),
    );
  }
}
