import { InjectModel } from '@nestjs/mongoose';
import { Observable, from } from 'rxjs';
import { Repository } from 'typeorm';
import { LoanSchemaMongo, loanDocument } from '../schemas/loan.schema';

export class LoanRepository {
  constructor(
    @InjectModel(LoanSchemaMongo.name)
    private loanRepository: Repository<loanDocument>,
  ) {}

  update(
    id: string,
    update: Partial<LoanSchemaMongo>,
  ): Observable<LoanSchemaMongo> {
    return from(this.loanRepository.update(id, update));
  }
}
