import {
  Controller,
  Put,
  Param,
  Body,
  NotFoundException,
  Post,
} from '@nestjs/common';
import { Observable, switchMap, of, throwError } from 'rxjs';
import { LoanSchemaMongo } from '../persistence/database/mongo/schemas/loan.schema';
import { LoanService } from '../services/loan.service';

@Controller('loans')
export class LoansController {
  constructor(private readonly loansService: LoanService) {}

  @Post()
  createLoan(@Body() loan: LoanSchemaMongo): Observable<LoanSchemaMongo> {
    return this.loansService.createLoan(loan);
  }

  @Put(':id')
  updateLoan(
    @Param('id') id: string,
    @Body() update: Partial<LoanSchemaMongo>,
  ): Observable<LoanSchemaMongo> {
    return this.loansService.updateLoan(id, update).pipe(
      switchMap((loan: LoanSchemaMongo) => {
        return loan
          ? of(loan)
          : throwError(new NotFoundException(`Loan with id ${id} not found`));
      }),
    );
  }
}
