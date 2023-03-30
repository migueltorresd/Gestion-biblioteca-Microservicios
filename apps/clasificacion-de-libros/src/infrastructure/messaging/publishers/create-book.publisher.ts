import { Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { createBookDto } from '../../dto/create-book.dto';

/**
 * Este publicador es el encargado de emitir un evento de creacion de libro
 * a la cola de mensajeria y el JSON que se envia es el DTO de creacion de libro
 *
 * @export
 * @class CreateBookPublisher
 */
export class CreateBookPublisher {
  constructor(
    @Inject('CLASIFICACION_DE_LIBROS_SERVICE')
    private readonly client: ClientProxy,
  ) {}

  /**
   * Este publicador se encarga de emitir un evento de creacion de libro
   * a la cola de mensajeria y el JSON que se envia es el DTO de creacion de libro
   * el stringify es para convertir el objeto en un string
   *
   * @param {createBookDto} data // el dto de creacion de libro
   * @memberof CreateBookPublisher
   */
  publish(data: createBookDto) {
    this.client.emit('create-book', JSON.stringify(data));
  }
}
