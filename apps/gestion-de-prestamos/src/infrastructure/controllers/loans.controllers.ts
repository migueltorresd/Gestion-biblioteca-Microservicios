import {
  Controller,
  Put,
  Param,
  Body,
  NotFoundException,
  Post,
  UseGuards,
} from '@nestjs/common';
import { Observable, switchMap, of, throwError } from 'rxjs';
import { LoanSchemaMongo } from '../persistence/database/mongo/schemas/loan.schema';
import { LoanService } from '../services/loan.service';
import { NewLoanPublisher } from '../messaging/publishers/new-loan.publisher';
import { DateGuard } from '../utils/guards/validation-auth.guard';

@Controller('loans')
export class LoansController {
  constructor(
    private readonly loansService: LoanService,
    private readonly newLoanPublisher: NewLoanPublisher,
  ) {}

  @UseGuards(DateGuard)
  @Post()
  createLoan(@Body() loan: LoanSchemaMongo): Observable<LoanSchemaMongo> {
    this.newLoanPublisher.publish(loan);
    return this.loansService.createLoan(loan);
  }

  @UseGuards(DateGuard)
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
