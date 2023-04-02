import { Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { UpdateLoanDto } from '../../dto/loan.dto';

export class NewLoanPublisher {
  constructor(
    @Inject('GESTION_DE_PRESTAMOS_SERVICE')
    private readonly client: ClientProxy,
  ) {}

  publish(data: UpdateLoanDto) {
    this.client.emit('new-loan', JSON.stringify(data));
  }
}
