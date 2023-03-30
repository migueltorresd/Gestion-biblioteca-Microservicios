import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

/**
 * Este metodo se encarga de crear la aplicacion y de configurar el microservicio
 * para que este pueda escuchar los mensajes que se envian por el bus de mensajeria *
 */
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
  console.log(
    `🚀 Application is running on: ${await app.getUrl()} - CLASIFICACION_DE_LIBROS🚀`,
  );
}
bootstrap();
