import { InjectModel } from '@nestjs/mongoose';
import { LoanDomainModel } from 'apps/gestion-de-prestamos/src/domain/models/loan.model';
import { Observable, from, switchMap } from 'rxjs';
import { Repository } from 'typeorm';
import { LoanSchemaMongo, loanDocument } from '../schemas/loan.schema';

export class LoanRepository {
  constructor(
    @InjectModel(LoanSchemaMongo.name)
    private loanRepository: Repository<loanDocument>,
  ) {}

  update(
    id: string,
    update: Partial<LoanDomainModel>,
  ): Observable<LoanDomainModel> {
    return from(this.loanModel.updateOne({ _id: id }, update)).pipe(
      switchMap(() => this.LoanDomainModel.findById(id)),
    );
  }
}
