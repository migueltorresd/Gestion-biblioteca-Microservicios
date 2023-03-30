import { Injectable } from '@nestjs/common';
import { LoanDomainModel } from 'apps/gestion-de-prestamos/src/domain/models/loan.model';
import { Observable } from 'rxjs';

import { LoanRepository } from '../repositories/loan.repository.mongo';

@Injectable()
export class LoanMongoService {
  constructor(private readonly loanRepository: LoanRepository) {}

  updateLoan(
    id: string,
    update: Partial<LoanDomainModel>,
  ): Observable<LoanDomainModel> {
    return this.loanRepository.update(id, update);
  }
}
