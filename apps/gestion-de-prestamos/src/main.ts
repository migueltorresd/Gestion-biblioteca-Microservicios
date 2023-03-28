import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { GestionDePrestamosModule } from './gestion-de-prestamos.module';

async function bootstrap() {
  const app = await NestFactory.create(GestionDePrestamosModule);
  app.connectMicroservice<MicroserviceOptions>({
    transport: Transport.RMQ,
    options: {
      urls: ['amqp://root:password@localhost:5672'],
      queue: 'main_queue',
      queueOptions: {
        durable: false,
      },
    },
  });
  await app.startAllMicroservices();
  await app.listen(3001);
  console.log(
    `🚀 Application is running on: ${await app.getUrl()} - GESTION DE PRESTAMOS🚀`,
  );
}
bootstrap();
