import { NestFactory } from '@nestjs/core';
import { GestionDePrestamosModule } from './gestion-de-prestamos.module';

async function bootstrap() {
  const app = await NestFactory.create(GestionDePrestamosModule);
  await app.listen(3000);
}
bootstrap();
