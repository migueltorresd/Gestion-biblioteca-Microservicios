import { Test, TestingModule } from '@nestjs/testing';
import { GestionDePrestamosController } from './gestion-de-prestamos.controller';
import { GestionDePrestamosService } from './gestion-de-prestamos.service';

describe('GestionDePrestamosController', () => {
  let gestionDePrestamosController: GestionDePrestamosController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [GestionDePrestamosController],
      providers: [GestionDePrestamosService],
    }).compile();

    gestionDePrestamosController = app.get<GestionDePrestamosController>(GestionDePrestamosController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(gestionDePrestamosController.getHello()).toBe('Hello World!');
    });
  });
});
