import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { NewLoanPublisher } from './publishers/new-loan.publisher';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'GESTION_DE_PRESTAMOS_SERVICE',
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
  providers: [ClientsModule, NewLoanPublisher],
  exports: [ClientsModule, NewLoanPublisher],
})
export class MessagingModule {}
