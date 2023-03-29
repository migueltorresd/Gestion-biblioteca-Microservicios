import { Injectable, Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { BookDomainEntity } from 'apps/clasificacion-de-libros/src/domain/entities/book-domain.entity';
import { Observable } from 'rxjs';

@Injectable()
export class FindBookByTitlePublisher {
  constructor(
    @Inject('CLASIFICACION_DE_LIBROS_SERVICE') // nombre del servicio a usar
    private readonly client: ClientProxy,
  ) {}

  publish(title: string): Observable<BookDomainEntity[]> {
    return this.client.send('find-book-by-title', title);
  }
}
