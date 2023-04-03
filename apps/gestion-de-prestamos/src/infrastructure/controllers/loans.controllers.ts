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
import { ApiOperation, ApiTags } from '@nestjs/swagger';

/**
 * Este controlador es el encargado de recibir las peticiones de crear, buscar y eliminar un libro
 *
 * @export
 * @class LoansController
 */
@ApiTags('loans')
@Controller('loans')
export class LoansController {
  /**
   * Este contructor es el encargado de inyectar el servicio de prestamo
   * y el servicio de publicacion de prestamo nuevo
   * @param {LoanService} loansService // inyecta el servicio de prestamo
   * @param {NewLoanPublisher} newLoanPublisher // inyecta el servicio de publicacion de prestamo nuevo
   * @memberof LoansController
   */
  constructor(
    private readonly loansService: LoanService,
    private readonly newLoanPublisher: NewLoanPublisher,
  ) {}

  /**
   * Este metodo es el encargado de recibir la peticion de crear un libro
   *
   * @param {LoanSchemaMongo} loan // recibe un objeto de tipo LoanSchemaMongo
   * @return {Observable<LoanSchemaMongo>} // retorna un observable de un LoanSchemaMongo
   * @memberof LoansController
   */
  @ApiOperation({ summary: 'Crea prestamo de libro' })
  @UseGuards(DateGuard)
  @Post()
  createLoan(@Body() loan: LoanSchemaMongo): Observable<LoanSchemaMongo> {
    this.newLoanPublisher.publish(loan);
    return this.loansService.createLoan(loan);
  }

  /**
   * Este metodo es el encargado de recibir la peticion de buscar un libro por su titulo
   *
   * @param {string} id // el id del libro
   * @param {Partial<LoanSchemaMongo>} update // el estado de prestamo del libro
   * @return {Observable<LoanSchemaMongo>} // retorna un observable de un LoanSchemaMongo
   * @memberof LoansController
   */
  @ApiOperation({ summary: 'Actualiza prestamo de libro' })
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
