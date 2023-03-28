import { Controller, Get } from '@nestjs/common';
import { EventPattern, Payload } from '@nestjs/microservices';
import { GestionDePrestamosService } from './gestion-de-prestamos.service';

@Controller()
export class GestionDePrestamosController {
  @EventPattern('create-book')
  createBook(@Payload() data: any) {
    console.log('----------funciona por fin------');
    console.log(data);
  }
}
