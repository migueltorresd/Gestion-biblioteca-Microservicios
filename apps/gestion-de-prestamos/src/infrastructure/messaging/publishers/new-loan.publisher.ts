import { Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { UpdateLoanDto } from '../../dto/loan.dto';

/**
 * Este servicio es el encargado de publicar un prestamo nuevo
 *
 * @export
 * @class NewLoanPublisher
 */
export class NewLoanPublisher {
  /**
   * Este contructor es el encargado de inyectar el servicio de publicacion de prestamo nuevo
   *
   * @param {ClientProxy} client
   * @memberof NewLoanPublisher
   */
  constructor(
    @Inject('GESTION_DE_PRESTAMOS_SERVICE')
    private readonly client: ClientProxy,
  ) {}

  /**
   * Este metodo es el encargado de publicar un prestamo nuevo
   *
   * @param {UpdateLoanDto} data
   * @memberof NewLoanPublisher
   */
  publish(data: UpdateLoanDto) {
    this.client.emit('new-loan', JSON.stringify(data));
  }
}
