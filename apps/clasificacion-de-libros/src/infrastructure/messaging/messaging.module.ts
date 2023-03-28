import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { CreateBookPublisher } from './publishers/create-book.publisher';

/**
 * Este modulo se encarga de configurar la cola de mensajeria
 *
 * @export
 * @class MessagingModule
 */
@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'CLASIFICACION_DE_LIBROS_SERVICE',
        transport: Transport.RMQ,
        options: {
          urls: ['amqp://root:password@localhost:5672'],
          queue: 'main_queue', // es la cola de mensajeria que se va a utilizar
          queueOptions: {
            durable: false,
          },
        },
      },
    ]),
  ],
  controllers: [],
  providers: [ClientsModule, CreateBookPublisher],
  exports: [ClientsModule, CreateBookPublisher],
})
export class MessagingModule {}
