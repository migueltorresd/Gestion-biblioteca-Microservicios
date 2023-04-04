import {
  BadRequestException,
  CanActivate,
  ExecutionContext,
  Injectable,
} from '@nestjs/common';
import { Observable, of, throwError } from 'rxjs';
import { catchError, filter, map } from 'rxjs/operators';

/**
 * este guard se encarga de validar que la fecha de devolucion sea mayor o igual a la fecha de prestamo
 *
 * @export
 * @class DateGuard
 * @implements {CanActivate}
 */
@Injectable()
export class DateGuard implements CanActivate {
  /**
   * este metodo se encarga de validar que la fecha de devolucion sea mayor o igual a la fecha de prestamo
   *
   * @param {ExecutionContext} context
   * @returns {Observable<boolean>}
   */
  canActivate(context: ExecutionContext): Observable<boolean> {
    const req = context.switchToHttp().getRequest();
    const body = req.body;
    const loanDate = body.loanDate;
    const returnDate = body.returnDate;

    return of(returnDate >= loanDate).pipe(
      filter((isValid) => isValid),
      map(() => true),
      catchError(() =>
        throwError(
          new BadRequestException(
            'La fecha de devolución debe ser mayor o igual a la fecha de préstamo.',
          ),
        ),
      ),
    );
  }
}
