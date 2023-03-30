import { InjectModel } from '@nestjs/mongoose';
import { LoanDomainModel } from 'apps/gestion-de-prestamos/src/domain/models/loan.model';
import { Model } from 'mongoose';
import { Observable, from, switchMap, map } from 'rxjs';
import { LoanSchemaMongo, loanDocument } from '../schemas/loan.schema';

export class LoanRepository {
  constructor(
    @InjectModel(LoanSchemaMongo.name)
    private loanRepository: Model<LoanSchemaMongo>,
  ) {}

  createloan(loanEntity: LoanDomainModel): Observable<LoanSchemaMongo> {
    return from(this.loanRepository.create(loanEntity)).pipe(
      switchMap((loan) => {
        return this.loanRepository.findById(loan._id);
      }),
    );
  }
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
