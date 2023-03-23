import { Module } from '@nestjs/common';
import { GestionDePrestamosController } from './gestion-de-prestamos.controller';
import { GestionDePrestamosService } from './gestion-de-prestamos.service';

@Module({
  imports: [],
  controllers: [GestionDePrestamosController],
  providers: [GestionDePrestamosService],
})
export class GestionDePrestamosModule {}
