import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';

/**
 * Guard para validar que el usuario sea admin
 *@param {user} string // el usuario del para prestamos
 * @Param {body} string // el cuerpo de la peticion
 * @Param {req} string // la peticion
 * @export
 * @class SecretGuard // la clase que implementa el guard
 * @Returns {boolean} // retorna un booleano si es true permite el acceso para actualizar un libro
 * @implements {CanActivate}
 */
@Injectable()
export class DateGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean {
    const req = context.switchToHttp().getRequest();
    const body = req.body;
    const loanDate = body.loanDate;
    const returnDate = body.returnDate;

    if (loanDate > returnDate) return true;
  }
}
