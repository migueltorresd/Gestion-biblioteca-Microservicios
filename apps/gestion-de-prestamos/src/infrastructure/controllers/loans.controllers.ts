import {
  Controller,
  Put,
  Param,
  Body,
  NotFoundException,
} from '@nestjs/common';
import { Observable, switchMap, of, throwError } from 'rxjs';
import { Loan } from '../persistence/database/mongo/schemas/loan.schema';
import { LoanMongoService } from '../persistence/database/mongo/services/loans.mongo.service';
@Controller('loans')
export class LoansController {
  constructor(private readonly loansService: LoanMongoService) {}

  @Put(':id')
  updateLoan(
    @Param('id') id: string,
    @Body() update: Partial<Loan>,
  ): Observable<Loan> {
    return this.loansService.updateLoan(id, update).pipe(
      switchMap((loan: Loan) => {
        return loan
          ? of(loan)
          : throwError(new NotFoundException(`Loan with id ${id} not found`));
      }),
    );
  }
}
