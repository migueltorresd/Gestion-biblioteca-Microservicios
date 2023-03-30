import { Injectable, Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { BookDomainEntity } from 'apps/clasificacion-de-libros/src/domain/entities/book-domain.entity';
import { Observable } from 'rxjs';

/**
 * Este publicador es el encargado de emitir un evento de busqueda de libro
 * a la cola de mensajeria y retorna un observable de un array de BookDomainEntity
 *
 * @export
 * @class FindBookByTitlePublisher
 */
@Injectable()
export class FindBookByTitlePublisher {
  constructor(
    @Inject('CLASIFICACION_DE_LIBROS_SERVICE') // nombre del servicio a usar
    private readonly client: ClientProxy,
  ) {}

  /**
   * Este publicador se encarga de emitir un evento de busqueda de libro
   * a la cola de mensajeria y retorna un observable de un array de BookDomainEntity
   *
   * @param {string} title //es una cadena de tesxto que se usara para buscar el libro
   * @return {Observable<BookDomainEntity[]>} // retorna un observable de un array de BookDomainEntity
   * @memberof FindBookByTitlePublisher
   */
  publish(title: string): Observable<BookDomainEntity[]> {
    return this.client.send('find-book-by-title', title);
  }
}
