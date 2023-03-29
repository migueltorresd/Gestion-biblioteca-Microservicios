import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
  console.log(
    `🚀 Application is running on: ${await app.getUrl()} - CLASIFICACION_DE_LIBROS🚀`,
  );
}
bootstrap();
