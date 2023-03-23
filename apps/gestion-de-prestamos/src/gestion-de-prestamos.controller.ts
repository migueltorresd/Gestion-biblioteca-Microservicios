import { Controller, Get } from '@nestjs/common';
import { GestionDePrestamosService } from './gestion-de-prestamos.service';

@Controller()
export class GestionDePrestamosController {
  constructor(private readonly gestionDePrestamosService: GestionDePrestamosService) {}

  @Get()
  getHello(): string {
    return this.gestionDePrestamosService.getHello();
  }
}
