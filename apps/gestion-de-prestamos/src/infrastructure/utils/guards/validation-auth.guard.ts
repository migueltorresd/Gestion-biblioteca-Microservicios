import { BadRequestException, Injectable } from '@nestjs/common';
import { CanActivate, ExecutionContext } from '@nestjs/common';
import { Observable, of } from 'rxjs';
import { filter } from 'rxjs/operators';
/**
 * Guard para validar que el usuario sea admin
 *
 * @param body // el body de la peticion
 * @Param {date} loanDate // la fecha de prestamo
 * @Param {date} returnDate // la fecha de devolucion
 * @export
 * @class SecretGuard // la clase que implementa el guard
 * @Returns {boolean} // retorna un booleano si es true permite el acceso para actualizar un libro
 * @implements {CanActivate}
 */
@Injectable()
export class DateGuard implements CanActivate {
  canActivate(context: ExecutionContext): Observable<boolean> {
    const req = context.switchToHttp().getRequest();
    const body = req.body;
    const loanDate = body.loanDate;
    const returnDate = body.returnDate;

    return of(returnDate >= loanDate).pipe(
      filter((isValid) => {
        if (!isValid) {
          throw new BadRequestException(
            'La fecha de devolución debe ser mayor o igual a la fecha de préstamo.',
          );
        }
        return true;
      }),
    );
  }
}
