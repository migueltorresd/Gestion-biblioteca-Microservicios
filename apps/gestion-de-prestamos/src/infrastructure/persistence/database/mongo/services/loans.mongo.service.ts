import { Inject, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { LoanDomainModel } from 'apps/gestion-de-prestamos/src/domain/models/loan.model';
import { from, Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { LoanRepository } from '../repositories/loan.repository.mongo';

@Injectable()
export class LoanMongoService {
  constructor(private readonly loanRepository: LoanRepository) {}

  updateLoan(
    id: string,
    update: Partial<LoanDomainModel>,
  ): Observable<LoanDomainModel> {
    return from(this.loanModel.findByIdAndUpdate(id, update)).pipe(
      switchMap(() => this.loanModel.findById(id)),
    );
  }
}
